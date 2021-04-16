import React, { Component } from 'react';
import fakerank from './fakerank';

class Ranks extends Component {
  record(x){
    if(this.props.score > x[x.length-1].point){
      return(
        <div>
          <h1 id="ranksTitle">Congrats! That's in the best 10! Please, add your details to the hall of fame:</h1>
          <form action="">
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Country"/>
            <input type="submit"/>
          </form>
        </div>
      )
    }
  }

  render(){
    const word = [ "Awesome", "Fascinating", "Incredible", "Marvelous", "Shocking", "Stunning", "Surprising", "Unbelievable", "Wonderful",  "Prodigious" ];
    return(
      <div className="ranks col-12 col-sm-6">
        <h2>{word[Math.floor(Math.random() * word.length)]}! You got {this.props.score} points!</h2>
        {this.record(fakerank)}
        <h3>The best scores:</h3>
        <ul>
        {fakerank.sort().map((data, index) => {return(
          <li key={index}>
            <p>{data.name}</p>
            <p>{data.point}</p>
            <p>{data.address}</p>
          </li>
        )})}
        </ul>
      </div>
    )
  }
}

export default Ranks;
