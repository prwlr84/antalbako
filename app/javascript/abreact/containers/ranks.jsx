import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Ranks extends Component {
  record(x){
    console.log(this.props.ranks);
    if(this.props.score > x[x.length-1].score){
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
        {this.record(this.props.ranks)}
        <h3>The best scores:</h3>
        <ul>
        {this.props.ranks.sort().map((data, index) => {return(
          <li key={index}>
            <p>{data.score}</p>
            <p>{data.name}</p>
            <p>{data.country}</p>
          </li>
        )})}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
 return {
 ranks: state.ranks
 };
}

export default connect(mapStateToProps, null)(Ranks);
