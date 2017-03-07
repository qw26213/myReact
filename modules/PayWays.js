import React from 'react'
import $ from 'jquery'
export default React.createClass({
   getInitialState(){
        return { 
            money:localStorage.curMeterMoney,
            meterNum:localStorage.curMeternumber,
            walletBalance:0.00,
            loading:true,
            error:null,
            data:null
        }
    },
    componentWillMount() {
        var payObj = {
          command: "40004.208",
          token: token,//用户标识
          name:localStorage.meterName,//水表名
          meterNum:localStorage.curMeternumber,//水表号
          money:localStorage.curMeterMoney,//缴费金额
          type:1,
          accountType:"XJ",
          couponId:0
        };
        var that = this;
        $.post(ip_url + '/iwaterapi.json',{"requestPara": JSON.stringify(payObj)},function(value){
             that.setState({loading: false, data: value});
        });
    },
    componentDidMount() {
        document.title = "支 付";$$('pageTit').innerText = "支 付";
    },
    payOrder:function(){
        console.log('开始支付');
    },
  render() {
     if (this.state.loading) {
      return <div className="h240 ub-apc">Loading<dot>...</dot></div>;
    } else if (this.state.error !== null) {
      return <div className="textTips"><span>{error.message}</span></div>;
    } else {
      var result = this.state.data.data.payWay;
      var PayMethod = result.map(function (result,i) {
      var bgStyle = {
        backgroundImage:"url("+result.bankImageUrl+")"
      }
        return (
                <div className="h60 ub-apj btbc bgb plr15" key={i}>
                    <div className="iconwh6 icon_1 ub-img7" style={bgStyle}></div>
                    <div className="ub-f1 ml15">
                        <div className="ulev1">{result.bankName}</div>
                        <div className="ulev-1 mt05 bc">{result.bankDesc}</div>
                    </div>
                    <input type="radio" name="payway" className="init" />
                </div>
        );
      });
    return (
        <div>
                <div className="plr15 btbc bgb mt10">
                    <div className="h40 ub-apj bbc">
                        <div className="ulev0">总额</div>
                        <div className="red ulev0">￥{this.state.money}</div>
                    </div>
                    <div className="h40 ub-apj">
                        <div className="bc1 ulev0">水表号</div>
                        <div className="bc1 ulev0">{this.state.meterNum}</div>
                    </div>
                </div>
                <div className="ub-apc bgb btbc ub-ver mt10">
                    <div className="ulev1 bc1 h40 ub-ac">钱包支付<i className="ulev0 ml15">余额（{this.state.data.data.walletBalance}元）</i></div>
                    <div className="ub-apc h50">
                        <div className="ulev3 bc1">￥</div>
                        <div className="h50 lh50 w120 ulev3 ml15">{this.state.money}</div>
                    </div>
                    <div className="ulev1 bc1 w200 h40 ub-apc btc">还需支付:<i className="red ulev1 ml15">￥0.01元</i></div>
                </div>
                <div className="h30 plr15 ulev0 ub-ac">支付方式</div>
                {PayMethod}
                <div className="nextFoot tx-c plr15">
                    <button className="w100 h40 lh40" onClick={this.payOrder}>确认支付</button>
                </div>

        </div>
    );
  }
}
})


