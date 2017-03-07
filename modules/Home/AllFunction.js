import React from 'react'
import { Link } from 'react-router' 
import Grid from './Grid'
export default React.createClass({
   componentDidMount() {
      document.title = "全部应用";$$('pageTit').innerText = "全部应用";
  },
  render() {
    return (
    <div>
        <Grid />
        <div className="bgb btbc mt10 bgb ptb10">
            <div className="plr15 bc ulev1 h30 ub-ac bbc">我的应用</div>
            <div className="clearfix w100">
                    <div className="w25 plr10 ptb05">
                <div className="ub-apc ub-ver h90">
                       <div className="icon_2 iconwh6 ub-img7"></div><h3 className="mt03 ulev-1">在线报装</h3>
                </div>
                    </div>
                    <div className="w25 plr10 ptb05">
                <div className="ub-apc ub-ver h90">
                       <div className="icon_2 iconwh6 ub-img7"></div><h3 className="mt03 ulev-1">在线报修</h3>
                </div>
                    </div>
                    <div className="w25 plr10 ptb05">
                <div className="ub-apc ub-ver h90">
                       <div className="icon_2 iconwh6 ub-img7"></div><h3 className="mt03 ulev-1">网点导航</h3>
                </div>
                    </div>
                    <div className="w25 plr10 ptb05">
                <div className="ub-apc ub-ver h90">
                       <div className="icon_2 iconwh6 ub-img7"></div><h3 className="mt03 ulev-1">行业热线</h3>
                </div>
                    </div>
                    <div className="w25 plr10 ptb05">
                <div className="ub-apc ub-ver h90">
                       <div className="icon_2 iconwh6 ub-img7"></div><h3 className="mt03 ulev-1">意见反馈</h3>
                </div>
                    </div>
                    <div className="w25 plr10 ptb05">
                <div className="ub-apc ub-ver h90">
                       <div className="icon_2 iconwh6 ub-img7"></div><h3 className="mt03 ulev-1">水质详情</h3>
                </div>
                    </div>
                    <div className="w25 plr10 ptb05">
                <div className="ub-apc ub-ver h90">
                       <div className="icon_2 iconwh6 ub-img7"></div><h3 className="mt03 ulev-1">水表详情</h3>
                </div>
                    </div>
            </div>
        </div>
        <div className="mt10 btbc mt10 bgb ptb10">
            <div className="plr15 bc ulev1 h30 ub-ac bbc">更多应用</div>
            <div className="clearfix w100" id="elseApplications">
                    <div className="w25 plr10 ptb05">
                <div className="ub-apc ub-ver h90">
                       <div className="icon_1 iconwh6 ub-img7"></div><h3 className="mt03 ulev-1">快捷缴费</h3>
                </div>
                    </div>
                    <div className="w25 plr10 ptb05">
                <div className="ub-apc ub-ver h90">
                       <div className="icon_1 iconwh6 ub-img7"></div><h3 className="mt03 ulev-1">快捷缴费</h3>
                </div>
                    </div>
                    <div className="w25 plr10 ptb05">
                <div className="ub-apc ub-ver h90">
                       <div className="icon_1 iconwh6 ub-img7"></div><h3 className="mt03 ulev-1">快捷缴费</h3>
                </div>
                    </div>
                    <div className="w25 plr10 ptb05">
                <div className="ub-apc ub-ver h90">
                       <div className="icon_1 iconwh6 ub-img7"></div><h3 className="mt03 ulev-1">快捷缴费</h3>
                </div>
                    </div>
                    <div className="w25 plr10 ptb05">
                <div className="ub-apc ub-ver h90">
                       <div className="icon_1 iconwh6 ub-img7"></div><h3 className="mt03 ulev-1">快捷缴费</h3>
                </div>
                    </div>
            </div>
        </div>
    </div>
    );
  }
})
