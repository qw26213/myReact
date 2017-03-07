import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import {
    InfiniteLoader,
    PullToRefresh,
    Cells,
    CellsTitle,
    Cell,
    CellBody,
    CellFooter
    } from 'react-weui';

class PtrDemo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,]
        }
    }

    render(){
        return(
            <PullToRefresh>
            <div>
                {
                    this.state.items.map( (item, i) => {
                        return (
                            <h2 href="javascript:;" key={i} access>
                                        {item}
                            </h2>
                        )
                    })
                 }
            </div>
            </PullToRefresh>
        )
    }
}

export default PtrDemo;
