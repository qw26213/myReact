import React from 'react'
import { Router,router, Route, hashHistory } from 'react-router'
import $ from 'jquery'
export default React.createClass({
  getInitialState: function() {
    return {
      data: null,
    };
  },
  componentDidMount() {
    document.title = "政策法规";$$('pageTit').innerText = "政策法规";
        if(sessionStorage.LawInfo){
            this.setState({data: JSON.parse(sessionStorage.LawInfo)});
            return;
        }
        this.getLawList();
  },
  getLawList(){//获取法律列表
    var dataObj={waterCorpId:waterCorpId};
    var that = this;
    Loading();
    $.post(ip_url+'/watercorpserver/nt/policy.json',{"requestPara": JSON.stringify(dataObj)},function(value){
         closeLoading();
         that.setState({data: value});
    })
  },
  componentWillUnmount(){
      sessionStorage.LawInfo = JSON.stringify(this.state.data);
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  handleClick: function(res) {
          localStorage.LawTitle = res.biaoti;
          localStorage.LawTime = res.time;
          localStorage.LawContent = res.neirong;
          this.context.router.push('/LawContent')
  },
  render: function() {
      if(this.state.data==null){ return ( <div></div>);}
      var repo = this.state.data.data;
      var self = this;
      var repoList = repo.map(function (repo,index) {
        return (
          <div className="ub-ac mt05 plr15 bgb btbc ptb05" key={index} onClick={self.handleClick.bind(null,repo)}>
                <div className="ub-f1">
                    <h3 className="ulev1">{repo.biaoti}</h3>
                    <p className="bc mt05 ulev0">{repo.time}</p>
                </div>
                <div className="ml10 arrow-right ub-img7"></div>
            </div>
        );
      });
      return (
        <div>{repoList}</div>
      );
    }
});
