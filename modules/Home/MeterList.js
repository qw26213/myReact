import React from 'react'
import { Router,router, Route, hashHistory } from 'react-router'
require('./swiper.min.css');
require('./swiper.min.js');
export default React.createClass({
   componentDidMount() {
    console.log(this.props.data)
    if(this.props.data.length!=0){
        var swiper = new Swiper('.swiper-container', {
          loop: false,
          autoplay: false,
          autoplayDisableOnInteraction : false,
          pagination: '.swiper-pagination',
          paginationClickable: true,
        });
    }
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  addMeter(){
    this.context.router.push('/AddMeter')
  },
  render() {
      var repo = this.props.data;
      if(repo.length!=0){
      var self = this;
      var MeterList = repo.map(function (data,index) {
             return (
                    <div className="plr10 swiper-slide boxSizing" key={index}>
                        <div className="meter_box bgb">
                            <div className="ub ub-pj plr15 mt15">
                                <div className="ub-ver ub-f1">
                                    <div className="ub-ac ulev-1">
                                        <div className="meterImg ub-img7 iconwh0 mr05"></div>{data.meterName}<i className="sc ulev-1">({data.meterNick})</i>
                                    </div>
                                    <div className="ub-ac ulev-2 mt05">
                                        <div className="meterImg2 ub-img7 iconwh0 mr05"></div>{data.meterNumber}
                                        <div className="textnowarp ub-f1 mr20 sc ml05">{data.meterAddress}</div>
                                    </div>
                                </div>
                                <div className="ub-ac ulev0 sc">更多
                                    <div className="more ub-img7 iconwh0 ml05"></div>
                                </div>
                            </div>
                            <div className="ub ub-pj plr15 mt15">
                                <div className="ub-ver">
                                    <div className="sc4 ulev-1">本期账单</div>
                                    <div className="ub mt05"><span className="ulev4 font_dinbold">{data.fullAmount}</span><span className="mt03">元</span></div>
                                </div>
                                <div className="ub-ver">
                                    <div className="sc4 ulev-1">应付余额</div>
                                    <div className="ub mt05"><span className="ulev4 font_dinbold">{data.arrearage}</span><span className="mt03">元</span></div>
                                </div>
                                <div className="ub-ver ulev-2">
                                    <div className="sc ulev-3 ub-ac">20天后到期<span className="meterImg3 ub-img7 iconwh0"></span></div>
                                    <div className="ub ub-pc mt05">
                                        <div className="btn02 ulev0 mt10">缴费</div>
                                    </div>
                                </div>
                            </div>
                            <div className="ub ulev-1 sc3 mt05 plr15 mb10">水司余额：{data.balance}元</div>
                            <div className="ub plr15 mt10 mb10">
                                <div className="sc ulev-2 ub-apc mr10"><div className="iconwh-1"></div>上月用水40吨</div>
                                <div className="sc ulev-2 ub-apc"><div className="iconwh-1 iconwh-2"></div>今年目前用水500吨</div>
                            </div>
                        </div>
                    </div>
                );
              });
      return (
        <div className="swiper-container boxSizing h200">
            <div className="swiper-wrapper mt10">{MeterList}</div>
            <div className="swiper-pagination"></div>
        </div>
        );
      }else{
        return(
            <div className="swiper-container boxSizing plr10">
                        <div className="bgb br10 h140 bac ub-ver ub-apc mt10" onClick={this.addMeter}>
                            <div className="add_water ub-img7 mt05"></div>
                            <p className="tx-c ulev3 mt10">添加水表</p>
                        </div>
            </div>
            )
      }
  }
})















