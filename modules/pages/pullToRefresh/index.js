import React from 'react';
import {PullToRefresh,Cells,CellsTitle,Cell,CellBody,CellFooter} from 'react-weui';
import Page from '../../component/page';

export default React.createClass({
  getInitialState() {
    return {
            items: [1,2,3,4,5,6,7,8,9]
    };
  },

  render() {
    return (
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
    );
  }
})
