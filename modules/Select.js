import React from 'react'
export default React.createClass({
componentDidMount() {
    document.title = "选择水司";$$('pageTit').innerText = "选择水司";
},
  selectThis(index){
          localStorage.waterCorpIdIndex = index;
          back();
  },
  render() {
    return (
        <div>
                <p className="plr15 h30 lh30">J</p>
                <div className="h40 ulev1 plr15 bgb lh40 btbc" onClick={this.selectThis.bind(null,0)}>江西鹰潭水司</div>
                <p className="plr15 h30 lh30">Y</p>
                <div className="h40 ulev1 plr15 bgb lh40 btbc" onClick={this.selectThis.bind(null,1)}>余江水司</div>
        </div>
    );
  }
})
