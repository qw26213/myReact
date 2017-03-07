import React from 'react'
export default React.createClass({
  render() {
    return (
    <div className="bbc bgb mt10">
        <div className="ub-apj item">
            <span className="tit_tag"></span>
            <div className="ulev0 ub-f1">水健康</div>
            <div className="more_btn ub-apc ulev0 sc">查看全部
                <div className="arrow-right ub-img7"></div>
            </div>
        </div>
        <div className=""><img src={require("../../images/banner2.png")} className="w100"/></div>
        <div className="tit_bg ub-img tx-c mt20">喝水计划</div>
        <div className="ub-ac mt10 pb15 plr15">
            <div className="ub-apc plr15 ub-f1 w0">
                <div className="wh140 ub-apc circle ub-img7">
                    <div className="waterlang_bg uabs"></div>
                    <div className="wh130 br50 ub-apc ub-ver uabs waterlang">
                    <div className="tx-c lh24 ulev1">
                    <li className="ulev0 bc2">尚需喝水</li>
                    <li className="font_dinbold ulev4 bc2">1800ml</li>
                    </div>
                    <div className="ub mt05 bw100 plr15">
                    <div className="ub-f1 lh20 tx-c ulev0 bc2">已喝<br/>1200ml</div>
                    <div className="ub-f1 lh20 tx-c ulev0 bc2">目标<br/>1000ml</div></div></div>
                    <div className="wh130 br50 ub-apc ub-ver overHide uabs" id="waterLang">
                        <div className="waterlang2"></div>
                        <div className="waterlang3"></div>
                    </div>
                </div>
            </div>
            <div className=" ub-f1 w0">
                <div>
                        <div className="ub-ac mt10 ulev-1">下次喝水<span className="ml10 mr10">19:23</span></div>
                        <div className="w100">
                            <li className="mt10 ub-apj h24 plr10  bgs2">
                                <div className="ulev0 h20 brc w40">15::00</div><div className="ulev0">400ml</div>
                            </li>
                        </div>
                        <div className="btn01 tx-c mt15">去喝水</div>
                </div>
            </div>
        </div>
    </div>
    );
  }
})


