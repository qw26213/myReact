import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Toast, Dialog } from 'react-weui';
export default React.createClass ({
   getInitialState() {
       return {
           showToast: false,
           showLoading: false,
           toastTimer: null,
           loadingTimer: null,
           showMsg:false,
           msgTxt:"",
           title:"提示",
           msgBtns:[{
                    type: 'default',
                    label: '确定',
                    onClick: this.hideMsg
           }]
       }
   },
   componentWillUnmount() {
        this.state.toastTimer && clearTimeout(this.state.toastTimer);
        this.state.loadingTimer && clearTimeout(this.state.loadingTimer);
    },
    hideMsg() {
        this.setState({showMsg: false});
    },
    showMsg(msgTxt) {
        this.setState({msgTxt: msgTxt});
        this.setState({showMsg: true});
    },
   showToast() {
       this.setState({ showToast: true });
       this.state.toastTimer = setTimeout(()=> {
            this.setState({showToast: false});
        }, 1500);
   },
   showLoading() {
       this.setState({ showLoading: true });
   },
   hideLoading() {
       this.setState({ showLoading: false });
   },
    render() {
        return (
            <div>
                <Toast icon="success-no-circle" show={this.state.showToast}>操作成功</Toast>
                <Toast icon="loading" show={this.state.showLoading}>加载中...</Toast>
                <Dialog title={this.state.title} show={this.state.showMsg} buttons={this.state.msgBtns} >
                    {this.state.msgTxt}
                </Dialog>
            </div>
        );
    }
});