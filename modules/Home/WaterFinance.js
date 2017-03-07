import React from 'react';

export default React.createClass({
  render() {
    return (
    <div className="mt10 bbc">
        <div className="ub-apj item bgb">
            <span className="tit_tag"></span>
            <div className="ulev0 ub-f1">水金融</div>
            <div className="more_btn ub-apc ulev0 sc">查看全部
                <div className="arrow-right ub-img7"></div>
            </div>
        </div>
        <div className="clearfix plr10 bgb pb10">
            <div className="bw33 plr205 mt05">
                <div className="ub-img7 urel w100">
                    <div className="uabs bh100 w100 ub-pc ub-ver plr10">
                        <h2 className="ulev1 bc06">定存</h2>
                        <p className="mt05 ulev-2 bc06">多种可选，复利客观</p>
                    </div>
                    <img src={require('../../images/bc1.png')} className="w100" />
                </div>
            </div>
            <div className="bw33 plr205 mt05">
                <div className="ub-img7 urel w100">
                    <div className="uabs bh100 w100 ub-pc ub-ver plr10">
                        <h2 className="ulev1 bc06">小额网贷</h2>
                        <p className="mt05 ulev-2 bc06">下款迅速，风险可控</p>
                    </div>
                    <img src={require('../../images/bc2.png')} className="w100" />
                </div>
            </div>
            <div className="bw33 plr205 mt05">
                <div className="ub-img7 urel w100">
                    <div className="uabs bh100 w100 ub-pc ub-ver plr10">
                        <h2 className="ulev1 bc06">无风险理财</h2>
                        <p className="mt05 ulev-2 bc06">快速上手，如期兑付</p>
                    </div>
                    <img src={require('../../images/bc3.png')} className="w100" />
                </div>
            </div>
        </div>
        <div className="pt10 bgb mt10">
            <div className="tit_bg ub-img tx-c">收益稳健</div>
            <div className="clearfix" id="financeList">
            </div>
        </div>
    </div>
    );
  }
})
