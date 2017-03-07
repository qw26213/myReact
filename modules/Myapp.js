import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Dialog,Tab,TabBody,NavBar,NavBarItem,Article } from 'react-weui';
export default React.createClass ({
   componentDidMount() {
      document.title = "水币余额";$$('pageTit').innerText = "水币余额";
  },
   getInitialState(){
        return { 
        title:"提示",
        showAuto1: false,
        showAuto2: false,
        tab:0,
        buttons1: [{
                    label: '确定',
                    onClick: this.hideDialog
                }],
        buttons2: [{
                    type: 'default',
                    label: '取消',
                    onClick: this.hideDialog
                },{
                    type: 'primary',
                    label: '确定',
                    onClick: this.hideDialog
                }]
        }
    },
    hideDialog() {
        this.setState({showAuto1: false});
        this.setState({showAuto2: false});
    },
    render() {
        return (
            <div>
                <Button type="default" onClick={ e=> this.setState({ showAuto1: true}) } >AutoDetect Style1</Button>
                <Button type="default" onClick={ e=> this.setState({ showAuto2: true}) } >AutoDetect Style1</Button>
                <Dialog title={this.state.title} show={this.state.showAuto1} buttons={this.state.buttons1} >
                    您确定删除这个水表吗？
                </Dialog>
                <Dialog title={this.state.title} show={this.state.showAuto2} buttons={this.state.buttons2} >
                    您确定删除这个水表吗？
                </Dialog>
                <Button>hello wechat</Button>


            <Tab>
                <NavBar>
                    <NavBarItem active={this.state.tab == 0} onClick={e=>this.setState({tab:0})}>Nav1</NavBarItem>
                    <NavBarItem active={this.state.tab == 1} onClick={e=>this.setState({tab:1})}>Nav2</NavBarItem>
                    <NavBarItem active={this.state.tab == 2} onClick={e=>this.setState({tab:2})}>Nav3</NavBarItem>
                </NavBar>
                <TabBody>
                    <Article style={{display: this.state.tab == 0 ? "block" : 'none'}}>
                        <h1>Page 1</h1>
                        <section>
                            <h2 className="title">Heading</h2>
                            <section>
                                <h3>1.1 Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
                            </section>
                        </section>
                    </Article>
                    <Article style={{display: this.state.tab == 1 ? "block" : 'none'}}>
                        <h1>Page 2</h1>
                        <section>
                            <h2 className="title">Heading</h2>
                            <section>
                                <h3>2.1 Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
                            </section>
                            <section>
                                <h3>2.2 Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </section>
                        </section>
                    </Article>
                    <Article style={{display: this.state.tab == 2 ? "block" : 'none'}}>
                        <h1>Page 3</h1>
                        <section>
                            <h2 className="title">Heading</h2>
                            <section>
                                <h3>3.1 Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
                            </section>
                            <section>
                                <h3>3.2 Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </section>
                        </section>
                    </Article>
                </TabBody>
            </Tab>





            </div>
        );
    }
});