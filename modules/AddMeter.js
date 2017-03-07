import React from 'react'
import { Router, Route,hashHistory } from 'react-router'
import $ from 'jquery'
export default React.createClass({
   getInitialState:function(){
      return {
          name:"请选择水司",number:''
      }
   },
  contextTypes: {
    router: React.PropTypes.object
  },
   componentDidMount() {
      document.title = "添加水表";$$('pageTit').innerText = "添加水表";
      var waterCorpIdIndex = localStorage.waterCorpIdIndex||0;
      var watercorList = ["江西鹰潭水司","余江水司"];
      this.setState({name:watercorList[waterCorpIdIndex]});
  },
   handlNumberChange:function(event){
        this.setState({number:event.target.value});
   },
    toSelect(){
         this.context.router.push('/Select');
    },
    handleSubmit:function(event){
      if(this.state.name=="请选择水司"){
        textTip("请选择水司");return;
      }
      var meterNumber = trim(this.state.number);
      if(meterNumber==""){
        textTip("水表号不能为空");return;
      }
      if(!isNumber(meterNumber)){
        textTip("水表号必须为数字");return;
      }
      var dataObj = {
            waterCorpId:waterCorpId,
            token:token,
            meterName:"",
            userID:meterNumber
      }
      var that = this;
        Loading();
        $.post(ip_url+'/memeterinfo/queryMeter.json',{"requestPara": JSON.stringify(dataObj)},function(data){
                closeLoading();
                if(data.status==0){
                        localStorage.meterData = JSON.stringify(data.data[0]);
                        that.context.router.push('/MeterDetail');
                }else{
                        textTip(data.message);
                }
        })
    },
   render() {
    return (
    <div>
        <div className="plr15 bgb mt10 btbc">
            <div className="h40 ub bbc ub-ac">
                 <label className="w60">水司名</label>
                 <div className="h30 ulev0 ub-f1 lh30 ml10" onClick = {this.toSelect}>{this.state.name}</div>
            </div>
            <div className="h40 ub ub-ac">
                <label className="w60">水表号</label>
                <input type="text" placeholder="请输入水表号" className="h40 ulev0 ub-f1" onChange={this.handlNumberChange}  />
            </div>
        </div>
        <div className="nextFoot tx-c plr15">
            <button className="w100 h40" onClick={this.handleSubmit}>下一步</button>
        </div>
    </div>
    );
  }
})
