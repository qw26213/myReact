import React from 'react'
import { Router, Route,hashHistory } from 'react-router'
import {Dialog,Switch} from 'react-weui';
import Toast from './Toast';
import $ from 'jquery' 
import Chart from './Chart'
export default React.createClass({
  getInitialState: function() {
    return {
      curIndex:0,
      curMeternumber:"",
      curMeterAddr:"",
      isOpen1:false,
      isOpen2:false,
      loading:true,
      data:null,
      error:null,
      showAuto1: false,
      showAuto2: false,
      showAuto3: false,
      title1:"编辑水表",
      title2:"删除水表",
      title3:"开启自动缴费",
      buttons1: [{
                  type: 'default',
                  label: '取消',
                  onClick: this.hideDialog
              },{
                  type: 'primary',
                  label: '确定',
                  onClick: this.updateThisMeter
              }],
      buttons2: [{
                  type: 'default',
                  label: '取消',
                  onClick: this.hideDialog
              },{
                  type: 'primary',
                  label: '确定',
                  onClick: this.deleThisMeter
              }],
      buttons3: [{
                  type: 'default',
                  label: '取消',
                  onClick: this.hideDialog
              },{
                  type: 'primary',
                  label: '确定',
                  onClick: this.switchAutoPay
              }],
    };
  },
  hideDialog() {
        this.setState({showAuto1: false});
        this.setState({showAuto2: false});
        this.setState({showAuto3: false});
    },

   componentWillMount() {
      document.title = "我的水表";$$('pageTit').innerText = "我的水表";
      localStorage.curMeternumber = "101604020";
  },
   componentDidMount() {
      this.getMeterList();
  },
  getMeterList(){//加载水表列表
      if(!sessionStorage.meterInfo){
        var dataObj={waterCorpId:waterCorpId,token:token};
        var that = this;
        $.post(ip_url+'/v1/watermeter/queryUserMeterList/v1.json',{"requestPara": JSON.stringify(dataObj)},function(value){
             that.setState({loading: false, data: value});
             that.setState({curMeternumber:value.data[0].meterNumber});
             that.setState({curMeterAddr:value.data[0].meterAddress});
             var isOpen1Status = value.data[0].meterAlert==0?false:true;
             var isOpen2Status = value.data[0].meterAutPayment==0?false:true;
             that.setState({isOpen1:isOpen1Status});
             that.setState({isOpen2:isOpen2Status});
             localStorage.curMeternumber = value.data[0].meterNumber;
             that.refs.ChartNode.getDetailInfo();
        })
    }else{
          console.log("走缓存")
          this.setState({loading: false, data: JSON.parse(sessionStorage.PayInfo)});
    }
  },
  deleThisMeter(){//删除水表
        var that = this;
        that.refs.toast.showLoading();
        var dataObj={token:token,meterId:this.state.data.data[this.state.curIndex].meterId};
        $.post(ip_url+'/v1/watermeter/deleteMeter/v1.json',{"requestPara": JSON.stringify(dataObj)},function(value){
             that.refs.toast.hideLoading();
             that.getMeterList();
             that.refs.toast.showToast();
        })
        this.hideDialog();
  },
  updateThisMeter(){//修改水表
        var curIndex = this.state.curIndex;
        var meterInfo = this.state.data.data;
        var dataObj={
                              token:token,
                              meterName:meterInfo[curIndex].name,
                              meterNumber:meterInfo[curIndex].meterNumber,
                              meterMobile:meterInfo[curIndex].meterMobile,
                              meterAlert:meterInfo[curIndex].meterAlert,
                              meterNick:this.refs.nickName.getDOMNode().value,
                              areaId:meterInfo[curIndex].areaId,
                              meterAddress:meterInfo[curIndex].meterAddress,
                              meterId:meterInfo[curIndex].meterId,
          };
        var that = this;
        that.refs.toast.showLoading();
        $.post(ip_url+'/v1/watermeter/modifyMeter/v1.json',{"requestPara": JSON.stringify(dataObj)},function(value){
             that.refs.toast.hideLoading();
             that.getMeterList();
             that.refs.toast.showToast();
        })
        this.hideDialog();
  },
  componentWillUnmount(){
      console.log("页面即将离开")
      sessionStorage.meterInfo = JSON.stringify(this.state.data);
  },
  handClick:function(i){
       this.setState({curIndex: i});
       this.setState({curMeternumber:this.state.data.data[i].meterNumber});
       this.setState({curMeterAddr:this.state.data.data[i].meterAddress});
       var isOpen1Status = this.state.data.data[i].meterAlert==0?false:true;
       var isOpen2Status = this.state.data.data[i].meterAutPayment==0?false:true;
       this.setState({isOpen1:isOpen1Status});
       this.setState({isOpen2:isOpen2Status});
       localStorage.curMeternumber = this.state.data.data[i].meterNumber;
       this.refs.ChartNode.getDetailInfo();
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  switch01:function(){//设置账单提醒
        var meterAlert = this.state.isOpen1==true?0:1;
        var dataObj={
                              token:token,
                              meterAlert:meterAlert,
                              meterId:this.state.data.data[this.state.curIndex].meterId,
          };
        var that = this;
       this.setState({isOpen1:!this.state.isOpen1});
        $.post(ip_url+'/v1/watermeter/setMeterAlert/v1.json',{"requestPara": JSON.stringify(dataObj)},function(value){
             that.refs.toast.showToast();
        })
  },
  switch02:function(){//设置自动缴费
      if(this.state.isOpen2==false){
            this.setState({showAuto3:true});
            return;
      }
      this.switchAutoPay();
  },
  switchAutoPay(){
      var meterAutPayment = this.state.isOpen2==true?0:1;
      var dataObj={
                            token:token,
                            meterAutPayment:meterAutPayment,
                            meterId:this.state.data.data[this.state.curIndex].meterId,
        };
       this.setState({isOpen2:!this.state.isOpen2});
        $.post(ip_url+'/v1/watermeter/setMeterAutPayment.json',{"requestPara": JSON.stringify(dataObj)},function(value){
             that.refs.toast.showToast();
        })
  },
  render() {
    if (this.state.loading) {
      return <div className="h240 ub-apc">Loading<dot>...</dot></div>;
    } else if (this.state.error !== null) {
      return <div className="textTips"><span>{error.message}</span></div>;
    } else {
      var result = this.state.data.data;
      var self = this;
      var repoList = result.map(function (result,i) {
        return (
            <div className={i === self.state.curIndex ? 'active meter br05 mr10 boxSizing' : 'meter br05 mr10 boxSizing'} onClick={self.handClick.bind(null,i)} key={i}>
                <div className="clock_icon ub-img7"></div>
                <h2 className="tx-c mt10 ulev0">{result.meterName}</h2>
                <p className="tx-c mt05 ulev0 sc">{result.meterNick}</p>
            </div>
        );
      });
    return (
            <div className="mt05 btc">
                    <div className="plr15 bgb bbc">
                        <div className="ub ub-ac myclocks p10">
                                {repoList}
                        </div>
                        <div className="ub-apj mt05">
                            <div className=" h50">
                                <p className="h24 ub-ac ulev0 bc">表号：{this.state.curMeternumber}</p>
                                <p className="h24 ub-ac ulev0 bc">地址：{this.state.curMeterAddr}</p>
                            </div>
                            <div className="h50 ub">
                                <div className="control2 ub-img7 mr05" onClick={ e=> this.setState({ showAuto1: true}) }></div>
                                <div className="control1 ub-img7" onClick={ e=> this.setState({ showAuto2: true}) }></div>
                            </div>
                        </div>
                    </div>
                    <div className="btbc bgb h36 ub-apj plr15 ulev0 bc">
                            <p>账单提醒：<i className="ulev-1 sc">开启后，每月将为你推送账单</i></p>
                            <div className={this.state.isOpen1 ? "icon-on ub-img7 " : "icon-off ub-img7"} onClick={this.switch01}></div>
                    </div>
                    <div className="bbc bgb h36 ub-apj plr15 ulev0 bc">
                            <p>自动缴费：<i className="ulev-1 sc">开启后，每月将自动从钱包余额代扣水费</i></p>
                            <div className={this.state.isOpen2 ? "icon-on ub-img7 " : "icon-off ub-img7"} onClick={this.switch02}></div>
                    </div>
                    <Chart ref="ChartNode" number={this.state.curMeternumber} />
                    <Dialog title={this.state.title1} show={this.state.showAuto1} buttons={this.state.buttons1} >
                        <input type="text" ref = "nickName" className="w120 h40 tx-c bac mat ulev1" placeholder="请输入水表昵称" />
                    </Dialog>
                    <Dialog title={this.state.title2} show={this.state.showAuto2} buttons={this.state.buttons2} >
                        您确定删除这个水表吗？
                    </Dialog>
                    <Dialog title={this.state.title3} show={this.state.showAuto3} buttons={this.state.buttons3} >
                        <p className="ulev-1">开启后，每月将自动从钱包余额代扣水费（要保证您的钱包中有充足的余额吆）</p>
                    </Dialog>
                    <Toast ref = "toast" />
            </div>
        );
    }
  }
})



