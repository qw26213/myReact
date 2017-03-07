import React from 'react'
import GM from 'g2-mobile';
import { Router,router, Route, browserHistory } from 'react-router'
import $ from 'jquery' 

export default React.createClass({
  getInitialState: function() {
    return {
      curYear:new Date().getFullYear(),
      nowYear:getCurDate(),
      data: null,
    };
  },
  contextTypes: {
    router: React.PropTypes.object
  },
    ToPayFee:function(){
            this.context.router.push('/PayFee?number='+this.props.number);
    },
    getDetailInfo:function(){
        var dataObj={
          token:token,
          meterNumber:localStorage.curMeternumber,
          accountType:"XJ",
          startDate:this.state.curYear+"0101",
          endDate:this.state.nowYear,
          payStatus:"1",
          waterCorpId:waterCorpId
        };
        var that = this;
        $.post(ip_url+'/v1/watermeter/queryPayMentInfo/v2.json',{"requestPara": JSON.stringify(dataObj)},function(value){
             that.setState({data: value});
             var payData=[];
             for(let i = 0;i<value.data.length;i++){
                    payData.push({"time":String(add0(i+1)),"value" : parseFloat(value.data[i].paidAmount)});
             }
            that.ChartInit(payData);
        })
    },
    prepYear:function(){
          this.state.curYear--;
          this.state.nowYear = String(this.state.curYear)+"1231";
          this.getDetailInfo()
    },
   nextYear:function(){
          if(this.state.curYear>=new Date().getFullYear()){
              return;
          }
          this.state.curYear++;
          this.state.nowYear= String(this.state.curYear)+"1231";
          this.getDetailInfo()
    },

    ChartInit:function(array){
      GM.Global.pixelRatio = 2;
      var Util = GM.Util;
      var chart = new GM.Chart({id: 'myChart'});
      var defs = {
        time: {type: 'timeCat',mask: 'mm',tickCount: 12,range:[0,1]},
        value: {tickCount: 5,min: 0}
      };
      var label = {fill: '#979797', font: '12px san-serif', offset: 6};
      chart.axis('time', {
        label: function (text, index, total) {
          var cfg = Util.mix({}, label);
          if (index === 0) {
            cfg.textAlign = 'start';
          }
          if (index > 0 && index === total - 1) {
            cfg.textAlign = 'end';
          }
          return cfg;
        }
      });
      chart.axis('value', {
        label: {
          fontSize: 12
        }
      });
      chart.source(array, defs);
      chart.line().position('time*value').shape('smooth');
      chart.point().position('time*value');
      chart.render();
    },
   componentDidMount:function() {
          this.getDetailInfo()
    },
  render() {
    return (
    <div>
        <div className="mt05 bgb ub-ac plr15">
            <div className="ub-ac h30">{this.state.curYear}年缴费记录</div>
            <div className="h45 ub-ac ub-pe ub-f1">
                    <button className="control4  ub-img7" onClick={this.ToPayFee}>缴水费</button>
                    <button className="control3 ml15 ub-img7" onClick={this.prepYear}>上一年</button>
                    <button className="control3 ml15 ub-img7" onClick={this.nextYear}>下一年</button>
            </div>
        </div>
        <div className="h240">
            <canvas id="myChart"></canvas>
        </div>
    </div>
    );
  }
})
