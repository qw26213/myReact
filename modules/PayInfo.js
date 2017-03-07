import React from 'react'
import { Router, Route, browserHistory,hashHistory} from 'react-router'
import Chart from './Chart'
import $ from 'jquery'
export default React.createClass({
    getInitialState:function(){
        return{
            isShow1:false,
            data:null,
            couponHtml:sessionStorage.couponHtml||"选择使用优惠劵"
        };
    },
    showDetail1:function(){
        this.setState({isShow1:!this.state.isShow1});
    },
   contextTypes: {
    router: React.PropTypes.object
   },
   toPay(){
        localStorage.curMeterMoney = this.state.data.data.arrearage;
        this.context.router.push('/PayWays');
   },
   toCoupon(){
        this.context.router.push('/Coupon');
   },
    showDetail2:function(){
        this.setState({isShow2:!this.state.isShow2});
    },
    componentDidMount() {
        document.title = "缴费详情";$$('pageTit').innerText = "缴费详情";
       if(sessionStorage.PayInfo){
          this.setState({data: JSON.parse(sessionStorage.PayInfo)}); return;
        }
        this.getPayInfo();
    },
    getPayInfo(){
            var dataObj={
                waterCorpId:waterCorpId,
                token:token,
                accountType:"XJ",
                meterNumber:localStorage.curMeternumber
            };
            var that = this;
            Loading();
            $.post(ip_url+'/v1/watermeter/queryPayInfo/v2.json',{"requestPara": JSON.stringify(dataObj)},function(value){
                closeLoading();
                 that.setState({loading: false, data: value});
                 localStorage.meterName = value.data.name;
            });
    },
  componentWillUnmount(){
      sessionStorage.PayInfo = JSON.stringify(this.state.data);
  },
  render() {
    if(this.state.data==null){ return ( <div></div>);}
    var repo = this.state.data.data;
    return (
    <div>
        <div className="plr15 bc1 ulev0 h30 ub-ac">账单信息</div>
        <div className="plr15 bgb btbc">
            <div className="ub-apj h45 bbc">
                <div className="ulev0">缴费单位</div><div className="ulev0">{repo.waterCorpName}</div>
            </div>
            <div className="ub-apj h40 bbc">
                <div className="ulev0 bc1">用户名</div><div className="ub-f1 tx-r bc1 ulev0">{repo.name}</div>
            </div>
            <div className="ub-apj h40 bbc">
                <div className="ulev0 bc1">水表号</div><div className="ub-f1 tx-r bc1 ulev0">{repo.userID}</div>
            </div>
            <div className="ub-apj h40 bbc">
                <div className="ulev0 bc1">水费月份</div><div className="ub-f1 tx-r bc1 ulev0">{repo.billSection}</div>
            </div>
            <div className="ub-apj h40">
                <div className="ulev0 bc1">本期读数|<b className="ml05 mr05 ulev-1">{repo.currentRead}</b>上期缴费读数|<b className="ml05 mr05 ulev-1">{repo.lastRead}</b></div>
                <div className="lh24 w60 bgs3 br05 tx-c ulev-1" onClick={this.showDetail1}>历史读数</div>
            </div>
        </div>
        <div className={this.state.isShow1 ? "": "uhide"}>
            <div className="h300 w100"><Chart /></div>
        </div>
        <div className="plr15 bgb">
            <div className="ub-apj h40 bbc">
                <div className="ulev0 bc1">用水吨数</div>
                <div className="ub-f1 tx-l bc1 ulev0 ml15">{repo.sumConsumedVolume}</div>
            </div>
            <div className="ub-apj h40 bbc">
                <div className="ulev0 bc1">账单金额</div>
                <div className="ub-f1 tx-l bc1 ulev0 ml15">￥{repo.fullAmount}</div>
            </div>
        </div>
            <div className="plr15 bc1 ulev0 h30 ub-ac">缴费信息</div>
            <div className="plr15 bgb btbc">
                <div className="ub-apj h40 bbc" onClick={this.toCoupon}>
                    <div className="ulev0 bc1">优惠劵</div>
                    <div className="ub-f1 tx-r bc1 ulev0" dangerouslySetInnerHTML={{__html: this.state.couponHtml}}></div>
                    <div className="arrow-right ub-img7 ml10"></div>
                </div>
                <div className="ub-apj h40 bbc">
                    <div className="ulev0 bc1">水司余额支付</div><div className="ub-f1 tx-r bc1 ulev0">￥{repo.balance}</div>
                </div>
                <div className="ub-apj h40">
                    <div className="ulev0 bc1">应付金额</div><div className="ub-f1 tx-r bc1 ulev0">￥{repo.arrearage}</div>
                </div>
            </div>
        <div className="ub-ac h50 bgb w100 btc ufix ulb0">
            <div className="ml15 mr10 ulev1 w80">缴费金额：</div>
            <div className="ub-f1 h40 ulev1 bgs2 pl05 ub-ac">{repo.arrearage}</div>
            <div className="bgs3 br05 h40 w80 ub-apc ulev1 ml10 mr15" onClick={this.toPay}>缴 费</div>
        </div>
    </div>
        );
  }
})
