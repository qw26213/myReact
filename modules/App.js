import React from 'react'
import MeterList from './Home/MeterList'
import Function from './Home/Function'
import Anno from './Home/Anno'
import WaterFinance from './Home/WaterFinance'
import MyCenter from './Home/MyCenter'
import Drinking from './Home/Drinking'
import ShopCity from './Home/ShopCity'
import Sociality from './Home/Sociality'
import Friend from './Home/Friend'
import $ from 'jquery'
export default React.createClass({
  getInitialState() {
    return {
      data:null,
      moduleId:[1, 26, 35, 32, 33, 34],
      meterList:[],//水表列表
      function1:[],//功能列表1
      notice:[],//公告
      function2:[],//功能列表2
      activityList:[],//活动列表
      userInfo:null,//用户信息
      waterRelatedAds:[],//广告
      adList:[],//广告列表
      bestSellers:[],//商品列表
      essayList:[],//文章列表
      addressBookList:[],
    };
  },
   componentDidMount() {
      document.title = "用水";$$('pageTit').innerText = "用水";
        sessionStorage.clear();localStorage.removeItem("waterCorpIdIndex");

        // if(localStorage.pageInfo){
        //       var pageInfo = JSON.parse(localStorage.pageInfo);
        //       this.setState({data: pageInfo});
        //       this.setState({MeterData: pageInfo.meterList});
        //       this.setState({FunctionData: pageInfo.functionList});
        //      return;
        // }
        this.getPageInit(34);
  },
  componentWillUnmount(){
      localStorage.pageInfo = JSON.stringify(this.state.data);
  },
    getPageInit(moduleId){
        var dataObj = {moduleId:moduleId,"province":"江西省","city":"鹰潭市","county":"月湖区",token:token};
        var that = this;
        Loading();
        $.post(ip_url+'/v1/appFunction/getModuleData.json',{"requestPara": JSON.stringify(dataObj)},function(data){
              closeLoading();
              if(data.data.meterList)//水表列表
                    that.setState({meterList: data.data.meterList});
              if(data.data.functionList&&moduleId==0)//功能列表1
                    that.setState({function1: data.data.functionList});
              if(data.data.functionList&&moduleId!=0)//功能列表2
                    that.setState({function2: data.data.functionList});

              if(data.data.notice)//公告
                    that.setState({notice: data.data.notice});
              if(data.data.activityList)//活动列表
                    that.setState({activityList: data.data.activityList});
              if(data.data.userInfo)//用户信息
                    that.setState({userInfo: data.data.userInfo});
              if(data.data.waterRelatedAds)//广告列表1
                    that.setState({waterRelatedAds: data.data.waterRelatedAds});
              if(data.data.adList)//广告列表2
                    that.setState({adList: data.data.adList});
              if(data.data.bestSellers)//商品列表
                    that.setState({bestSellers: data.data.bestSellers});
              if(data.data.essayList)//文章列表
                    that.setState({essayList: data.data.essayList});
              if(data.data.addressBookList)//附近的人
                    that.setState({addressBookList: data.data.addressBookList});
        });
  },

  render() {
      if(this.state.data==null){ return ( <div></div>);}
      return (
              <div>
                <MeterList data={this.state.data.meterList}/>
                <Function data={this.state.function1}/>
                <Anno data={this.state.notice}/>
                <WaterFinance />
                <MyCenter data={this.state.userInfo} />
                <Drinking />
                <ShopCity data={this.state.bestSellers} />
                <Sociality data={this.state.essayList} />
                <Friend data={this.state.addressBookList} />
              </div>      
      )
  }
})
