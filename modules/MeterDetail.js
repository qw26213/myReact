import React from 'react'
import $ from 'jquery'
export default React.createClass({
  getInitialState: function() {
    return {
      data:JSON.parse(localStorage.meterData),
      nick:""
    };
  },
   handlNickChange:function(event){
        this.setState({nick:event.target.value})
   },
  addMeter(){
      if(this.state.nick==""){
        textTip("水表昵称不能为空");return;
      }
        var meterData = this.state.data;
        var dataObj = {
              waterCorpId: waterCorpId,
              token: token,
              meterName: meterData.name,
              meterNumber: meterData.userID,
              areaID: 3306,
              meterAlert: 0,
              mobile: meterData.mobile,
              meterNick: this.state.nick,
              meterAddress: meterData.address
        }
          Loading();
        $.post(ip_url+'/memeterinfo/addMeter.json',{"requestPara": JSON.stringify(dataObj)},function(data){
                closeLoading();
                if(data.status==0){
                        history.go(-2);
                }else{
                        textTip(data.message);
                }
        })
  },
   componentDidMount() {
      document.title = "水表详情";$$('pageTit').innerText = "水表详情";
  },
  render() {
    var repo = this.state.data;
    return (
<div>
    <div className="plr15 bgb mt10">
        <div className="h40 ub bbc ub-ac">
            <label>水&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;司</label>
            <div className="h30 lh30 ulev0 ub-f1 tx-r">江西鹰潭水司</div>
            <div className="arrow-right ub-img1"></div>
        </div>
        <div className="h40 ub bbc ub-ac">
            <label>手 机 号</label><div className="lh30 ulev0 ub-f1 tx-r">{repo.mobile}</div>
        </div>
        <div className="h40 ub bbc ub-ac">
            <label>户 主 名</label><div className="lh30 ulev0 ub-f1 tx-r">{repo.name}</div>
        </div>
        <div className="h40 ub bbc ub-ac">
            <label>水 表 号</label><div className="lh30 ulev0 ub-f1 tx-r">{repo.userID}</div>
        </div>
        <div className="h40 ub bbc ub-ac">
            <label>地 址</label><div  className="lh30 ulev0 ub-f1 tx-r">{repo.address}</div>
        </div>
        <div className="h40 ub bbc ub-ac">
            <label>水表昵称</label><input type="text" className="h30 lh30 ulev0 ub-f1 tx-r" placeholder="请输入水表昵称" value ={repo.nick} onChange={this.handlNickChange} />
        </div>
    </div>
    <div className="nextFoot tx-c plr15">
        <button className="w100 h36" onClick={this.addMeter}>确认添加</button>
    </div>
</div>
    );
  }
})
