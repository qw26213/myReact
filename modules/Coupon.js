import React from 'react'
import $ from 'jquery'
export default React.createClass({
   getInitialState: function() {
    return {
      data: null,
    };
  },
   componentDidMount() {
        document.title = "优惠劵";$$('pageTit').innerText = "优惠劵";
        var dataObj = {
            // command: "30000.206",
            token: token,
            type: "1",
            page: 1
        }
        var that = this;
        Loading();
        $.post('http://101.200.219.159:8081/iwaterMock/getMyCoupon',{"requestPara": JSON.stringify(dataObj)},function(value){
              closeLoading();
             that.setState({loading: false, data: value});
        });
    },
    handClick(index){
            localStorage.setItem("coupon",index)
            sessionStorage.couponHtml = "8折优惠";
            back();
    },

  render() {
      if(this.state.data==null){ return ( <div></div>);}
      var repo = this.state.data.data;
      var self = this;
      var repoList = repo.map(function (repo,index) {
        return (
                <div className="ub m10 ub-img7 bg_coupon" onClick={self.handClick.bind(null,index)} key={index}>
                    <div className="ub ub-f2 ub-ver ptb10 ml10 w0">
                        <div className="h30 ub-ac">
                            <div className="white ulev3 mr05">{repo.couponName}</div>
                            <div className="h20 ub-apc white ulev-1 br05 plr05 bgtransgray">还有{repo.deadday}天过期</div>
                        </div>
                        <div className="white ulev1 mt15">抵用现金不找零</div>
                        <div className="white textSize1 mt10 lh24">有效期:{repo.couponStartTime}至{repo.couponEndTime}</div>
                    </div>
                    <div className="ub-apc ub-f1 tx-c w0 ub-ver ptb10">
                        <div className="ub-apc ub-f1"><span className="ulev36 white">{repo.reduceMoney}</span><i className="ulev2 white">￥</i></div>
                        <div className="tx-c lh24 white textSize2 w100">{repo.couponEndTime}</div>
                    </div>
                </div>
        );
      });
      return (
        <div>{repoList}</div>
      );
    }
})

// <div className="white ulev1 mt15">订单满100元立减</div>
// <div className="white ulev1 mt15">最高抵扣20元</div>
// <div className="ub-apc ub-f1 ulev36 white"><i className="ulev2 white">折</i></div>