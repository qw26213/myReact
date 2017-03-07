import React from 'react'
export default React.createClass({
    componentDidMount() {
        document.title = "水价详情";$$('pageTit').innerText = "水价详情";
    },
  render() {
    return (
        <div className="mt10">
              <img src={require("../images/waterprice.png")} className="w100"/>
        </div>
    );
  }
})


