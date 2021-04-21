import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Ranks extends Component {
  constructor(props){
    super(props);
    this.state = { record: false, ranks:[] };

    this.record = this.record.bind(this);
  }

  record(){
    function postrank(z){
      const form = document.querySelector('#rankForm');
      const name = document.querySelector('input[name="name"]').value;
      const coun = document.querySelector('input[name="country"]').value;

      form.action = `http://localhost:3000/pages?country=${coun}&name=${name}&score=${z.props.score}`;
      fetch('http://localhost:3000/pages/1/ranks')
          .then(r=>r.json())
          .then(json => {z.setState({ ranks: json });console.log(z.state.ranks);})
    }

    return(
      <div>
        <h1 id="ranksTitle">Congrats! That's in the best 10! Please, add your details to the hall of fame:</h1>
        <form id='rankForm' onSubmit={() => {postrank(this);}} method='POST'>
          <input type="text" name='name' placeholder="Name"/>
          <input type="text" name='country' placeholder="Country"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }

  list(array){
    return(
    array.map((data, index) => {return(
      <li key={index}>
        <p>{data.score}</p>
        <p>{data.name}</p>
        <p>{data.country}</p>
      </li>

    )})
  )}

  render(){
    const word = [ "Awesome", "Fascinating", "Incredible", "Marvelous", "Shocking", "Stunning", "Surprising", "Unbelievable", "Wonderful",  "Prodigious" ];
    let ranksStatic = this.props.ranks;
    console.log(ranksStatic);
    return(
      <div className="ranks col-12 col-sm-6">
        <h2>{word[Math.floor(Math.random() * word.length)]}! You got {this.props.score} points!</h2>
        {this.props.score > ranksStatic[ranksStatic.length-1].score ? this.record() : null}
        <h3>The best scores:</h3>
        <ul>
        {this.state.ranks.length <= 1 ? this.list(ranksStatic) : this.list(this.state.ranks)}
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
