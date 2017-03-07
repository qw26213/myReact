import React from 'react'
export default React.createClass({
  render() {
    return (
    <div className="mt10 bbc bgb pb10">
        <div className="ub-apj item">
            <div className="tit_tag"></div>
            <div className="ulev0 ub-f1">特约商户</div>
            <div className="more_btn ub-apc ulev0 sc">查看全部<div className="arrow-right ub-img7"></div></div>
        </div>
        <div className=""><img src={require('../../images/banner3.png')} className="w100"/></div>
        <div className="clearfix">
            <div className="bw50 h80 ub-ac plr15">
                <div className="ub-f1">
                    <p className="ulev0">商品名称</p>
                    <p className="ulev-1 sc mt05">疯抢仅一天</p>
                </div>
                <img src={require('../../images/pp.png')} width="60" />
            </div>
            <div className="bw50 h80 ub-ac plr15">
                <div className="ub-f1">
                    <p className="ulev0">商品名称</p>
                    <p className="ulev-1 sc mt05">疯抢仅一天</p>
                </div>
                <img src={require('../../images/pp.png')} width="60" />
            </div>
        </div>
        <div className="tit_bg ub-img tx-c mt10">热销商品</div>
        <div className="clearfix plr10">

            <div className = "bw50 plr205 mt05">
                <div className = "ub-img7 urel w100">
                    <div className = "uabs h30 tx-c-l bgc2 ulev-1 plr10 boxSizing"> 我是一个小小鸟 </div>
                        <img src={require('../../images/tt.png')} className="w100 " />
                    </div>
            </div>
            <div className = "bw50 plr205 mt05">
                <div className = "ub-img7 urel w100">
                    <div className = "uabs h30 tx-c-l bgc2 ulev-1 plr10 boxSizing"> 我是一个小小鸟 </div>
                        <img src={require('../../images/tt.png')} className="w100 " />
                    </div>
            </div>



        </div>
    </div>
    );
  }
})


