import React from 'react';

class Clicker extends React.Component{
  state={
    number:1,
  };

  getRandomNum = ()=>{
    const number = Math.floor(Math.random() * 10);
    console.log(number);
    this.setState({number});
  }

  render(){
    const {number} = this.state;
    const message = "Wow, that's a lucky one!";
    return (
      <div className="Clicker">
        <h1>Number is: {number}</h1>
    {number === 7 ? <h2>{message}</h2> : <button onClick={this.getRandomNum}>Random Number</button>}
      </div>
    )
  }
}

export default Clicker;
