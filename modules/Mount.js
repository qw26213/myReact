import React from 'react'
import $ from 'jquery'
export default React.createClass({
   componentDidMount() {
      document.title = "在线报装";$$('pageTit').innerText = "在线报装";
  },
  getInitialState: function() {
    return {
      imgUrl1:require("../images/upload.png"),
      imgUrl2:require("../images/upload.png"),
      IdCardUrl: '',
      houseCardUrl:'',
    };
  },
    onFileChange1(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length) {return} 
        this.createImage(files,1);
    },
    onFileChange2(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length) {return} 
        this.createImage(files,2);
    },
    createImage(file,type) {
        var reader = new FileReader();
        var that = this;
        reader.onload =function(e){
            var fileArr=[];
            fileArr.push(e.target.result.split(',')[1]);
            Loading();
            $.ajax({
                  url:ip_url+"/iwatermgr/shop/uploadBase64.json",
                  type: "post",
                  data: {'base64Code':fileArr},
                  dataType: 'json',
                  traditional: true,
                  success: function(data) {
                    closeLoading();
                      if (data.status == 0) {
                         textTip("上传成功！")
                            if(type==1){
                                that.setState({IdCardUrl:data.data[0]});
                                $$('Img01').setAttribute('src',data.data[0])
                            }else{
                                that.setState({houseCardUrl:data.data[0]});
                                $$('Img02').setAttribute('src',data.data[0])
                            }

                      } else {
                          textTip(data.message);
                      }
                  },
                  error: function(err) {
                    closeLoading();
                          textTip('上传失败！');
                  }
          });
        };
       reader.readAsDataURL(file[0]);
   },

    handleSubmit() {
            const meterName = trim(this.refs.name.getDOMNode().value);
            const mobile = trim(this.refs.mobile.getDOMNode().value);
            const address = this.refs.address.getDOMNode().value;
            const feenumber = this.refs.payfee.getDOMNode().value;
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
                textTip('报装地点不能为空！');return;
            }
            if(feenumber==""){
                textTip('缴费号不能为空！');return;
            }
            if(this.state.IdCardUrl==""){
                textTip('身份证照片/户口本还没上传！');return;
            }
            if(this.state.houseCardUrl==""){
                textTip('房产证还没上传！');return;
            }
            var dataObj = {
                    meterName: meterName,
                    mobile:mobile,
                    address:address,
                    meternum:feenumber,
                    IdCardUrl:this.state.IdCardUrl,
                    houseCardUrl:this.state.houseCardUrl,
                    packType:"",
                    token: token,//token
                    waterCorpId: waterCorpId//水司id
            };
            console.log(dataObj);
        Loading();
        $.post(ip_url+'/watercorpserver/nt/onlinePack.json',{"requestPara": JSON.stringify(dataObj)},function(data){
                closeLoading();
                if(data.status==0){
                        textTip("报装申请成功~");wait_back();
                }else{
                        textTip(data.message);
                }
        })
  },

  render() {
    return (
        <div>
                <div className="plr15 mt05 bgb btbc">
                    <div className="ub-ac bbc h40">
                        <div className="w70">用&nbsp;户&nbsp;名</div>
                        <input  type="text" className="ub-f1 h40 mr15 ulev0 ml05" placeholder="请输入用户名" ref="name" />
                        <div className="red">*</div>
                    </div>
                    <div className="ub-ac h40">
                        <div className="w70">联系电话</div>
                        <input  type="text" className="ub-f1 h40 mr15 ulev0 ml05" placeholder="请输入电话" ref="mobile"  />
                        <div className="red">*</div>
                    </div>
                </div>

                <div className="plr15 mt05 bgb btbc">
                    <div className="ub-ac bbc h40">
                        <div className="w70">缴&nbsp;费&nbsp;号</div>
                        <input  type="text" className="ub-f1 h40 ulev0 ml05" placeholder="分户或总表用户需提供原缴费号码" ref="payfee" />
                        <span className="red">*</span>
                    </div>
                    <div className="ub-ac h40">
                        <div className="w70">报装地点</div>
                        <input  type="text" className="ub-f1 h40 ulev0 ml05" placeholder="请输入报装地点" ref="address" />
                        <span className="red">*</span>
                    </div>
                </div>
                <div className="plr15 mt05 bgb btbc">
                    <div className="w100 ub h120 mt15">
                        <div className="ub-f1 ub-apc ub-ver mr20 w0">
                            <img src={this.state.imgUrl1} width="66" height="66" className="mt05" id="Img01" />
                            <div className="tx-c mt10 bc ulev0">身份证/户口本</div>
                            <input type="file" accept="image/*" multiple onChange={this.onFileChange1}/>
                        </div>
                        <div className="ub-f1 ub-apc ub-ver w0">
                            <img src={this.state.imgUrl2} width="66" height="66" className="mt05" id="Img02" />
                            <div className="tx-c mt10 bc ulev0">房产证</div>
                            <input type="file" accept="image/*" multiple onChange={this.onFileChange2}/>
                        </div>
                    </div>
                </div>
                <div className="plr15 mt15">
                    <p className="bc lh24 ulev0 tx-j">备注：自建房需下载<a className="link" href="http://www.jxytgs.com/fujian/%E4%B8%AA%E4%BA%BA%E6%8A%A5%E5%BB%BA%E5%AE%A1%E6%89%B9%E6%89%8B%E7%BB%AD.doc
                ">《个人审批手续》</a>到街道办事处（乡政府）和居委会（村小组）盖公章</p>
                </div>
                <div className="nextFoot tx-c plr15">
                    <button className="w100 h36" onClick={this.handleSubmit}>提 交</button>
                </div>
        </div>
    );
  }
})

