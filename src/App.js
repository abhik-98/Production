import React, { Component } from 'react';
import Button from './components/custButton';
import './CSS/style.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      display:'0',
      previous: [],
      result:'',
      nextDisplay: false
    };

  }

  reset = () => {
    this.setState({display: '0',previous:[], nextDisplay:false });
  }

  addToDisplay = (symbol) =>{
    if(["/","*","+","-"].indexOf(symbol)>-1){
      let {previous} =this.state;
      previous.push(this.state.display+symbol)
      this.setState({previous, nextDisplay:true});
    }

    else  {
      if(this.state.display ==='0' || this.state.nextDisplay){
        this.setState({display: symbol, nextDisplay:false});
      }
      else
      this.setState({display: this.state.display + symbol});
    }
      
  }

  calculate = (symbol) =>{
    let {display , previous, nextDisplay} = this.state;
    if(previous.length>0){
      display= eval( String(this.state.previous[this.state.previous.length-1]+ this.state.display));
      this.setState({display , previous:[], nextDisplay: false });
    }
  }

  render() {
    const btn=[
      {symbol:'C', col:3, action:this.reset},
      {symbol:'/', col:1, action:this.addToDisplay},
      {symbol:'7', col:1, action:this.addToDisplay},
      {symbol:'8', col:1, action:this.addToDisplay},
      {symbol:'9', col:1, action:this.addToDisplay},
      {symbol:'*', col:1, action:this.addToDisplay},
      {symbol:'4', col:1, action:this.addToDisplay},
      {symbol:'5', col:1, action:this.addToDisplay},
      {symbol:'6', col:1, action:this.addToDisplay},
      {symbol:'-', col:1, action:this.addToDisplay},
      {symbol:'1', col:1, action:this.addToDisplay},
      {symbol:'2', col:1, action:this.addToDisplay},
      {symbol:'3', col:1, action:this.addToDisplay},
      {symbol:'+', col:1, action:this.addToDisplay},
      {symbol:'0', col:2, action:this.addToDisplay},
      {symbol:'.', col:1, action:this.addToDisplay},
      {symbol:'=', col:1, action:this.calculate},
    ];
    return (
      <div>
        
        <input className="result" type="text" value={this.state.display}></input>
        {
          this.state.previous.length>0 ? <sub className="last"> {this.state.previous[this.state.previous.length-1]} </sub>: null
        }
        
        {
          btn.map((b,i)=>{
            return <Button key={i} cust_symbol={b.symbol} cust_col={b.col} cust_action={(symbol)=>b.action(symbol)}/>
          })
        }
      </div>
    );
  }
}

export default App;
