import React from 'react'
import { Link } from 'react-router'
import $ from 'jquery'
export default React.createClass({
    getInitialState: function() {
        return {data: null};
    },
    componentDidMount() {
        document.title = "停水公告";document.getElementById('pageTit').innerText = "停水公告";
        var dataObj = { waterCorpId: waterCorpId }
        var that = this;
        Loading();
        $.post(ip_url+'/watercorpserver/nt/noticeList.json', { "requestPara": JSON.stringify(dataObj) }, function(value) {
             closeLoading();
            that.setState({ loading: false, data: value });
        })
    },
    render: function() {
          if(this.state.data==null){ return ( <div></div>);}
            var repo = this.state.data.data;
            var repoList = repo.map(function(repo, index) {
                return ( < div className = "ub bjindu"
                    key = { index } >
                    < div className = "ub w30 ub-ver mr05" >
                    < div className = "top ub-f1 w100" > < /div> < div className = "bop ub-f1 w100" > < /div> < img src = { require('../images/to.png') }
                    /> < /div> < div className = "annoBox ub-f1 plr10 mt10 mb10" >
                    < div className = "bbdc" > { repo.sday }
                    至 { repo.eday } < /div> < div className = "bbdc" > 影响范围： { repo.address } < /div> < div className = "bbdc" > 停水原因： { repo.reason } < /div> < /div> < /div>
                );
            });
            return ( < div className = "plr10" > { repoList } < /div>);
        }
});
