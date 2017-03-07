import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { Link } from 'react-router' 
export default React.createClass({
    componentDidMount(){
        
    },
  render() {
    var repo = this.props.data;
    var self = this;
    var functionList = repo.map(function (data,index) {
        var bgStyle = {backgroundImage:"url(css/img/"+data.iconName+".png)"}
            return (
                    <Link to="/MeterInfo" key={index}>
                        <div className="w25 ub-apc pt10 ub-ver">
                            <div className="iconwh ub-img7" style={bgStyle}></div>
                            <h3>{data.name}</h3>
                        </div>
                    </Link>
            );
    });
    return (<div className="bgb mt10 btbc">
                 <div className=" bbc clearfix pb10">
                    {functionList}
                    <Link to="/AllFunction">
                            <div className="w25 ub-apc pt10 ub-ver">
                                    <div className="icon_08 iconwh ub-img7"></div>
                                    <h3>全部应用</h3>
                            </div>
                    </Link>
              </div>
        </div>)
}
})
