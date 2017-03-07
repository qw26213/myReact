import React from 'react'
export default React.createClass({

  render() {
    var bgStyle = {backgroundImage:'url(../../css/img/1.png)'}
    return (
    <div className="mt10 bbc bgb pb10">
        <div className="ub-apj item">
            <div className="tit_tag"></div>
            <div className="ulev0 ub-f1">社交</div>
            <div className="more_btn ub-apc ulev0 sc">查看全部
                <div className="arrow-right ub-img7"></div>
            </div>
        </div>
        <div className=""><img src={require("../../images/banner3.png")} className="w100"/></div>
        <div>
                <div className="plr10">
                    <div className="bac br05 mt10">
                        <div className="ub-apc h50 plr15"><span className="userImg ub-img7 iconwh2 br50" style={bgStyle}></span>
                            <div className="ub-f1">
                                <div className="ub-f1 ulev0 bc">爱水科技</div>
                                <div className="sc ulev-1">2017-03-01</div>
                            </div>
                        </div>
                        <div className="deItem ub"><img src={require("../../images/tt.png")} className="itemImg" />
                            <div className="itemdesc ub-f1">
                                <p className="ub-f3 bc tx-j">社区故事社区故事社区故事社区故事社区故事社区故事社区故事社区故事</p>
                            </div>
                        </div>
                        <div className="ub h30">
                            <div className="ub-f1 ub-apc ulev-1"><span className="zan_icon_01 ub-img7 icon_small"></span>赞</div>
                            <div className="ub-f1 ub-apc ulev-1"><span className="zan_icon_02 ub-img7 icon_small"></span>评论</div>
                            <div className="ub-f1 ub-apc ulev-1"><span className="zan_icon_03 ub-img7 icon_small"></span>收藏</div>
                            <div className="ub-f1 ub-apc ulev-1"><span className="zan_icon_04 ub-img7 icon_small"></span>分享</div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    );
  }
})


