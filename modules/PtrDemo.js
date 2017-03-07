import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Page,PullToRefresh,Cells,CellsTitle,Cell,CellBody,CellFooter } from 'react-weui';
import momentLoader from '../css/img/loading.png';
export default React.createClass ({
   componentDidMount() {
      document.title = "下拉刷新";$$('pageTit').innerText = "下拉刷新";
  },
   getInitialState(){
        return { 
            items: [1,2,3,4,5,6,7,8,9],
        }
    },
    render() {
        return (
        <Page className="ptr">
            <div style={{height: '200px',background: '#fff'}}>
                <PullToRefresh
                    onRefresh={
                        resolve => {
                            setTimeout(()=>{this.setState({items: this.state.items.concat([this.state.items.length + 1])}, ()=> resolve())
                            }, 1000)
                        }
                    }>
                    <CellsTitle>List with link</CellsTitle>
                    <Cells>{
                        this.state.items.map( (item, i) => {
                            return (
                                <Cell href="javascript:;" key={i} access>
                                    <CellBody>{item}</CellBody><CellFooter/>
                                </Cell>
                            )
                        })
                    }
                    </Cells>

                </PullToRefresh>
            </div>
            <br/>

            <div style={{height: '200px',background: '#fff'}}>
                <PullToRefresh
                    loaderDefaultIcon={
                        (progress) => {
                            let style = {
                                transform: `rotate(-${progress * 5}deg)`
                            }
                            return (
                                <div style={{ flex: 1, padding: '5px' }}>
                                    <img src={momentLoader} width="40px" style={style}/>
                                </div>
                            )
                        }
                    }
                    loaderLoadingIcon={
                        <div style={{
                            flex: 1,
                            padding: '5px',
                        }}>
                            <img src={momentLoader} width="40px" style={{
                                animation: '0.4s spin infinite linear'
                            }}/>
                        </div>
                    }
                    onRefresh={
                        resolve => {
                            setTimeout(()=>{
                                this.setState({
                                    items: this.state.items.concat([this.state.items.length + 1])
                                }, ()=> resolve())
                            }, 1000)
                        }
                    }>
                    <CellsTitle>Moment Loader Example</CellsTitle>
                    <Cells>{
                        this.state.items.map( (item, i) => {
                            return (
                                <Cell href="javascript:;" key={i} access>
                                    <CellBody>{item}</CellBody><CellFooter/>
                                </Cell>
                            )
                        })
                    }</Cells>

                </PullToRefresh>
            </div>
        </Page>
        );
    }
});