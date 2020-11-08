import React, { Component } from 'react';

class custButton extends Component {
    render() {
        return (
            <div className= {`column-${this.props.cust_col}`}>
                <button className="calc" onClick={()=>this.props.cust_action(this.props.cust_symbol)} >{this.props.cust_symbol}</button>
            </div>
        );
    }
}

export default custButton;