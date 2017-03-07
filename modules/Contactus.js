import React from 'react'
export default React.createClass({
   componentDidMount() {
      document.title = "行业热线";$$('pageTit').innerText = "行业热线";
  },
  render() {
    return (
        <div>
                <div className="mt05"><img src={require("../images/rexian.png")} alt="" className="w100"/></div>
                <div className="bgb plr15 mt10 btbc">
                    <div className="h40 ub-ac bbc">
                        <span className="rewh re01 ub-img7 mr10"></span>
                        <div className="ub-f1 bc ulev0">24小时热线电话</div>
                        <div className=" sc1 ulev0">0701-6221211</div><span className="arrow-right ub-img7 ml10"></span>
                    </div>
                    <div className="h40 ub-ac bbc">
                        <span className="rewh re02 ub-img7 mr10"></span>
                        <div className="ub-f1 bc ulev0">举报电话</div>
                        <div className=" sc1 ulev0">0701-6216696</div><span className="arrow-right ub-img7 ml10"></span>
                    </div>
                    <div className="h40 ub-ac bbc">
                        <span className="rewh re03 ub-img7 mr10"></span>
                        <div className="ub-f1 bc ulev0">水质监督</div>
                        <div className=" sc1 ulev0">0701-6218536</div><span className="arrow-right ub-img7 ml10"></span>
                    </div>
                    <div className="h40 ub-ac">
                        <span className="rewh re04 ub-img7 mr10"></span>
                        <div className="ub-f1 bc ulev0">工程公司</div>
                        <div className=" sc1 ulev0">0701-6221236</div><span className="arrow-right ub-img7 ml10"></span>
                    </div>
                </div>
        </div>
    );
  }
})


