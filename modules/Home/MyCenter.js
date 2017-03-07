import React from 'react'
import actImg from '../../images/act01.png'
export default React.createClass({
  render() {
    return (
    <div className="plr10 br10 mt10">
        <div className="bgb">
            <div className="weather urel">
                <img src={require("../../images/weather.png")} className="w100" />
                <div className="uabs wh100 tl0">
                    <div className="ub-apj h40 mt05 plr05">
                        <div>
                            <div className="h20 bc2 ulev-1">气温：30℃</div>
                            <div className="h20 bc2 ulev-1">地点：北京市朝阳区</div>
                        </div>
                        <div>
                            <div className="h20 bc2 ulev-1">AQI：25</div>
                            <div className="h20 bc2 ulev-1">湿度：25%</div>
                        </div>
                    </div>
                    <div className="ub-apc h45 mt-15 ub-ver">
                        <li className="bc2 h20 ulev-1">- RAINNY -</li>
                        <li className="bc2 h20 ulev-1">- 雨 -</li>
                    </div>
                </div>
            </div>
            <div className="ub-apc h80 plr15 mt-30">
                <div className="userImg ub-img7 iconwh4 br50"></div>
                <div className="ub-f1 mt30">
                    <div className="ub-f1 ulev0 bc">爱水科技</div>
                    <div className="ub-ac">
                        <div className="sc ulev-1 ub-ac">
                            黄金三级 <div className="xing ub-img7"></div><div className="xing ub-img7"></div><div className="xing ub-img7"></div>
                        </div>
                        <div className="sc ulev-1 ub-ac ml15">
                            勋章<div className="xin ub-img7"></div><div className="xin ub-img7"></div><div className="xin ub-img7"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt05 plr10  bgb" id="userMoney">
            <div className="ub-ac h40 bbc">
                <div className="ion01 ub-img7 mr10 iconwh7"></div>
                <div className="ub-f1 ulev0 tx-l">钱包余额（元）</div>
                <div className="ulev0 walletMoney">0.00</div>
            </div>
            <div className="ub-ac h40 bbc bgb">
                <div className="ion02 ub-img7 mr10 iconwh7"></div>
                <div className="ub-f1 ulev0 tx-l">水币余额（个）</div>
                <div className="ulev0 waterMoney">0</div>
            </div>
            <div className="ub-ac h40 bbc bgb">
                <div className="ion03 ub-img7 mr10 iconwh7"></div>
                <div className="ub-f1 ulev0 tx-l">大奖碎片</div>
                <div className="ulev0 fragment">0</div>
            </div>
            <div className="ub-ac h40 bbc bgb">
                <div className="ion04 ub-img7 mr10 iconwh7"></div>
                <div className="ub-f1 ulev0 tx-l">卡劵</div>
                <div className="ulev0 coupon_count">0</div>
            </div>
            <div className="ub-ac h40 bbc bgb">
                <div className="ion05 ub-img7 mr10 iconwh7"></div>
                <div className="ub-f1 ulev0 tx-l">任务：查看水费账单</div>
                <div className="ulev0 ub-ac">更多<div className="arrow-right ub-img7"></div></div>
            </div>
        </div>
        <div className="mt05 plr10 ptb10 bgb">
            <div className="tit_bg ub-img tx-c">热门活动</div>
            <div className="ub-ac horScroll">
                    <div className="w_100 plr205 mt05">
                        <img src={actImg} className="w100" />
                    </div>
                    <div className="w_100 plr205 mt05">
                        <img src={actImg} className="w100" />
                    </div>
                    <div className="w_100 plr205 mt05">
                        <img src={actImg} className="w100" />
                    </div>
                    <div className="w_100 plr205 mt05">
                        <img src={actImg} className="w100" />
                    </div>
            </div>
        </div>
    </div>
    );
  }
})


