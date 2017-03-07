import React from 'react'
export default React.createClass({
   componentWillMount() {
          document.title = "编辑水表";$$('pageTit').innerText = "编辑水表";
  },
  render() {
    return (
<div>
    <div className="plr15 bgb mt10">
        <div className="h40 ub bbc ub-ac">
            <label>水&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;司</label>
            <div className="h30 lh30 ulev0 ub-f1 tx-r">江西鹰潭水司</div>
            <div className="arrow-right ub-img1"></div>
        </div>
        <div className="h40 ub bbc ub-ac">
            <label>手 机 号</label><div className="lh30 ulev0 ub-f1 tx-r" ></div>
        </div>
        <div className="h40 ub bbc ub-ac">
            <label>户 主 名</label><div className="lh30 ulev0 ub-f1 tx-r"></div>
        </div>
        <div className="h40 ub bbc ub-ac">
            <label>水 表 号</label><div className="lh30 ulev0 ub-f1 tx-r" ></div>
        </div>
        <div className="h40 ub bbc ub-ac">
            <label>地 址</label><div  className="h30 lh30 ulev0 ub-f1 tx-r" ></div>
        </div>
        <div className="h40 ub bbc ub-ac">
            <label>水表昵称</label><input type="text" className="h30 lh30 ulev0 ub-f1 tx-r" placeholder="请输入水表昵称" />
        </div>
    </div>
    <div className="nextFoot tx-c plr15">
        <button className="w100 h36">确认修改</button>
    </div>
</div>
    ); 
  }
})
