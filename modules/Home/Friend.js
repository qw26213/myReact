import React from 'react'
export default React.createClass({
  render() {
    var bgStyle = {backgroundImage:'url(../../css/img/1.png)'}
    return (
    <div>
        <div className="ub-apj h50 plr15 bgb mt10">
            <div className="index_icon2 ub-img7 iconwh mr05"></div>
            <div className="ulev0 ub-f1">您可能认识的好友</div>
            <div className="more_btn ub-apc ulev0 sc">查看全部
                <div className="arrow-right ub-img7"></div>
            </div>
        </div>
        <div className="h30 plr15 ub-ac bgs7 ulev-1"><div className="Volume ub-img7"></div>小小给你发送了一条私信</div>
        <div className="ub-ac plr15 nearbyuser ptb10 bgb">
            <div className="w120 ub-ver ub-ac bac ptb10 ml10">
                <div className="userwh ub-img7" style={bgStyle}></div>
                <h3 className=" mt05 h26 ulev0">小苹果</h3>
                <div className="tx-c mt05 h24 ulev0 w90 bac2 br05">+好友</div>
                <div className="tx-c mt05 h24 ulev0 w90 bac2 br05 ub-apc"><div className="ub-img7 chat_img"></div>私信</div>
            </div>
            <div className="w120 ub-ver ub-ac bac ptb10 ml10">
                <div className="userwh ub-img7" style={bgStyle}></div>
                <h3 className=" mt05 h26 ulev0">小苹果</h3>
                <div className="tx-c mt05 h24 ulev0 w90 bac2 br05">+好友</div>
                <div className="tx-c mt05 h24 ulev0 w90 bac2 br05 ub-apc"><div className="ub-img7 chat_img"></div>私信</div>
            </div>
            <div className="w120 ub-ver ub-ac bac ptb10 ml10">
                <div className="userwh ub-img7" style={bgStyle}></div>
                <h3 className=" mt05 h26 ulev0">小苹果</h3>
                <div className="tx-c mt05 h24 ulev0 w90 bac2 br05">+好友</div>
                <div className="tx-c mt05 h24 ulev0 w90 bac2 br05 ub-apc"><div className="ub-img7 chat_img"></div>私信</div>
            </div>
        </div>
    </div>
    );
  }
})


