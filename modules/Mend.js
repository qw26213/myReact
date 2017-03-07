import React from 'react'
import $ from 'jquery'
export default React.createClass({
   componentDidMount() {
      document.title = "在线报修";$$('pageTit').innerText = "在线报修";
  },
  handleSubmit() {
            const meterName = trim(this.refs.name.getDOMNode().value);
            const mobile = trim(this.refs.mobile.getDOMNode().value);
            const address = this.refs.address.getDOMNode().value;
            const repairType = this.refs.repairType.getDOMNode().value;
            if(meterName==""){
                textTip('用户名不能为空！');return;
            }
            if(mobile==""){
                textTip('手机号不能为空！');return;
            }
            if(!telCheck(mobile)){
                textTip('手机号格式不正确！');return;
            }
            if(address==""){
                textTip('报修地点不能为空！');return;
            }
            if(repairType==""){
                textTip('报修类型不能为空！');return;
            }
            var dataObj = {
                    meterName:meterName,
                    mobile:mobile,
                    address:address,
                    repairType:repairType,
                    token: token,//token
                    waterCorpId: waterCorpId//水司id
            };
            console.log(dataObj);
        Loading();
        $.post(ip_url+'/watercorpserver/nt/onlineRepair.json',{"requestPara": JSON.stringify(dataObj)},function(data){
                closeLoading();
                if(data.status==0){
                        textTip("报修申请成功~");wait_back();
                }else{
                        textTip(data.message);
                }
        })
  },
  render() {
    return (
        <div>
                <div className="plr15 mt05 bgb btbc">
                    <div className="ub-ac bbc">
                        <div className="w70">用&nbsp;户&nbsp;名</div>
                        <input  type="text" className="ub-f1 h40 mr15 ulev0 ml05" placeholder="请输入用户名"  ref="name" />
                        <div className="red">*</div>
                    </div>
                    <div className="ub-ac">
                        <div className="w70">联系电话</div>
                        <input  type="text" className="ub-f1 h40 mr15 ulev0 ml05" placeholder="请输入电话" ref="mobile" />
                        <div className="red">*</div>
                    </div>
                </div>

                <div className="plr15 mt05 bgb btbc">
                    <div className="ub-ac bbc">
                        <div className="w70">报修地点</div>
                        <input  type="text" className="ub-f1 h40 ulev0 ml05" placeholder="请输入报修地点" ref="address" />
                        <span className="red">*</span>
                    </div>
                    <div className="ub-ac">
                        <div className="w70">报修类型</div>
                        <select  type="text" className="ub-f1 h40 ulev0 ml05" ref="repairType">
                            <option value="">请输入报修类型</option>
                            <option value="1">水质水压</option>
                            <option value="2">管道漏损</option>
                            <option value="3">水表破坏</option>
                        </select>
                    </div>
                </div>
                <div className="plr15 mt15">
                    <p className="mendType">报修类型如下：</p>
                    <p className="bc lh30 ulev0">1、水质水压：出水过黄或有浑浊物、出水水流过低或间歇性无水；</p>
                    <p className="bc lh30 ulev0">2、管道漏损：标签主管、道路漏水；</p>
                    <p className="bc lh30 ulev0">3、水表破坏：水表玻璃破裂、水表不转、水表冻坏；</p>
                </div>
                <div className="nextFoot tx-c plr15">
                    <button className="w100 h36" onClick={this.handleSubmit}>提 交</button>
                </div>
        </div>
    );
  }
})
