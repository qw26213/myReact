import React from 'react'
import $ from 'jquery';
export default React.createClass({
 componentDidMount(){
    setInterval(function(){
        $('#annoList').animate({  
                marginTop : "-40px"
            },500,function(){
                $(this).css({marginTop : "0"}).find("li:first").appendTo(this);  
            })  
        },1000);
  },
  render() {
    return (
    <div>
        <div className="mt10 btbc plr15 ub-apj bgb h40">
            <div className="anno ub-img7"></div>
            <div className="ub-f1 pl10 ub-ac ml10"><div className="anno_mark mr10 br05">停水</div>
                <div className="ub-f1 xyhidden h40" id="annoList">
                        <p className="ulev0 w100 textnowarp lh40">111文字介绍文字介绍文字介绍</p>
                        <p className="ulev0 w100 textnowarp lh40">222文字介绍文字介绍文字介绍</p>
                        <p className="ulev0 w100 textnowarp lh40">333文字介绍文字介绍文字介绍</p>
                </div>
            </div>
            <div className="arrow-right ub-img7"></div>
        </div>
        <div className="mt10"><img src={require('../../images/banner1.png')} className="w100" /></div>
    </div>
    );
  }
})


