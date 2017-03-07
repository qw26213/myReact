import React from 'react'
export default React.createClass({
   componentDidMount() {
      document.title = "水质详情";document.getElementById('pageTit').innerText = "水质详情";
  },
  render() {
    return (
        <div className="mt10">
              <img src={require("../images/quality.png")} className="w100"/>
        </div>
    );
  }
})
