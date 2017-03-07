import React from 'react'
import { Router, Route, browserHistory,hashHistory } from 'react-router'
import $ from 'jquery'
export default React.createClass({
    getInitialState() {
        return {
            meterNumber:localStorage.curMeternumber,
            btnTxt:"下一步"
        };
    },
    componentDidMount() {
        document.title = "缴费";$$('pageTit').innerText = "缴费";
        sessionStorage.removeItem('PayInfo');console.log("清除缴费详情页的数据")
    },
   contextTypes: {
        router: React.PropTypes.object
   },
    nextFoot:function(){
            var dataObj = {
                    waterCorpId: waterCorpId,//水司id
                    token: token,//用户标识
                    userID: this.state.meterNumber//水表号
              }
            var self = this;
            $.post(ip_url+'/memeterinfo/queryMeter.json',{"requestPara": JSON.stringify(dataObj)},function(data){
                    if(data.status==0){
                           if(data.data[0].arrearage==0){
                                    self.setState({btnTxt:"暂未欠费"});
                           }else{
                                    localStorage.meterNum = data.data[0].userID
                                    self.context.router.push('/PayInfo?number='+self.state.meterNumber)
                          }
                    }else{
                        self.setState({btnTxt:data.message});
                    }
            })
    },
    render() {
        return ( 
                <div>
                    <div className="bgb mt10">
                        <div className="h40 ub bbc ub-ac ub-pc plr15">
                            <div> 水表号 </div>
                            <div className="tx-r ub-f1">{this.state.meterNumber}</div>
                        </div>
                    </div>
                    <div className="nextFoot tx-c plr15">
                        <button className="w100 h36" onClick={this.nextFoot}>{this.state.btnTxt}</button>
                    </div>
                    <div className="tx-c bc ulev0 mt10"> 查看缴费历史>> </div>
                </div>
        );
    }
})
