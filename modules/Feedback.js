import React from 'react'
import $ from 'jquery'
export default React.createClass({
   componentDidMount() {
      document.title = "意见反馈";$$('pageTit').innerText = "意见反馈";
  },
  handleSubmit() {
            const meterName = trim(this.refs.name.getDOMNode().value);
            const mobile = trim(this.refs.mobile.getDOMNode().value);
            const address = this.refs.address.getDOMNode().value;
            const email = this.refs.email.getDOMNode().value;
            const content = this.refs.content.getDOMNode().value;
            if(meterName==""){
                textTip('用户名不能为空！');return;
            }
            if(mobile==""){
                textTip('手机号不能为空！');return;
            }
            if(!telCheck(mobile)){
                textTip('手机号格式不正确！');return;
            }
            var dataObj = {
            meterName:meterName,
            mobile:mobile,
            address:address,
            email:email,
            content:content,
            token: token,//token
            waterCorpId: waterCorpId//水司id
            };
            console.log(dataObj);
        Loading();
        $.post(ip_url+'/watercorpserver/nt/suggestion.json',{"requestPara": JSON.stringify(dataObj)},function(data){
                closeLoading();
                if(data.status==0){
                        textTip("感谢您的反馈~");wait_back();
                }else{
                        textTip(data.message);
                }
        })
  },
  render() {
    return (
        <div>
                <div className="plr15 mt05 bgb btbc">
                    <div className="ub ub-ac bbc">
                        <div className="w70">用&nbsp;户&nbsp;名</div>
                        <input  type="text" className="ub-f1 h40 mr15 ulev0 ml05" ref="name" placeholder="请输入用户名"  />
                        <div className="red">*</div>
                    </div>
                    <div className="ub bgb ub-ac">
                        <div className="w70">联系电话</div>
                        <input  type="text" className="ub-f1 h40 mr15 ulev0 ml05" ref="mobile" placeholder="请输入电话" />
                        <div className="red">*</div>
                    </div>
                </div>
                <div className="plr15 mt05 bgb btbc">
                    <div className="ub ub-ac bbc">
                        <div className="w70">联系地址</div>
                        <input  type="text" className="ub-f1 h40 mr15 ulev0 ml05" ref="address" placeholder="请输入地址" />
                    </div>
                    <div className="ub ub-ac">
                        <div className="w70">邮&nbsp;&nbsp;&nbsp;&nbsp;箱</div>
                        <input  type="text" className="ub-f1 h40 mr15 ulev0 ml05" ref="email" placeholder="请输入邮箱" />
                    </div>
                </div>
                <div className="plr15 mt05 bgb btbc">
                    <div className="ub ub-ac">
                        <textarea className="ub-f1 h100 ulev0 lh36" ref="content" placeholder="请留下您的宝贵建议"></textarea>
                    </div>
                </div>
                <p className="plr15 bc h24 ulev-1 mt05">感谢您对我们的工作及服务提出良好宝贵的意见及建议，为了更好地服务为您服务，请认真填写以上信息。
                </p>
                <div className="nextFoot tx-c plr15">
                    <button className="w100 h36" onClick={this.handleSubmit}>提 交</button>
                </div>
        </div>
    );
  }
})
