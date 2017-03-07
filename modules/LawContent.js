import React from 'react'
export default React.createClass({
   componentDidMount() {
      document.title = "政策详情";document.getElementById('pageTit').innerText = "政策详情";
  },
  getInitialState: function() {
    return {
      title:localStorage.LawTitle,
      time:localStorage.LawTime,
      content:localStorage.LawContent,
      };
    },
    render: function() {
          return (
                <div className="lawcontent p15 bgb">
                    <h2 className="tx-c ulev2">{this.state.title}</h2>
                    <p className="tx-c bc time ulev0 lh36">{this.state.time}</p>
                    <div  className="content ulev0 lh24" dangerouslySetInnerHTML={{__html: this.state.content}}></div>
                </div>
          );
      }
});
