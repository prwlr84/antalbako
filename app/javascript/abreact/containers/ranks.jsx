import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Ranks extends Component {
  constructor(props){
    super(props);
    this.state = { upD: false, ranks:[] };

    this.record = this.record.bind(this);
  }

  record(){
    function postrank(z){
      const form = document.querySelector('#rankForm');
      const name = document.querySelector('input[name="name"]').value;
      const coun = document.querySelector('input[name="country"]').value;

      form.action = `http://localhost:3000/pages?country=${coun}&name=${name}&score=${z.props.score}`;
      z.setState({upD: true});
    }

    return(
      <div>
        <h1 id="ranksTitle">Congrats! That's in the best 10! Please, add your details to the hall of fame:</h1>
        <form id='rankForm' onSubmit={() => {postrank(this)}} method='POST'>
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



  componentDidUpdate(prevState) {
    // Typical usage (don't forget to compare props):
    const ul = document.querySelector('ul');
    if (this.state.upD === true) {
    fetch('http://localhost:3000/pages/1/ranks')
      .then(r=>r.json())
      .then(json => {ul.innerHTML = this.list(json); console.log(this.list(json));})
    this.setState({upD: false});
    }
  }

  render(){
    const word = [ "Awesome", "Fascinating", "Incredible", "Marvelous", "Shocking", "Stunning", "Surprising", "Unbelievable", "Wonderful",  "Prodigious" ];
    let ranksStatic = this.props.ranks;
    console.log(this.state);
    return(
      <div className="ranks col-12 col-sm-6">
        <h2>{word[Math.floor(Math.random() * word.length)]}! You got {this.props.score} points!</h2>
        {ranksStatic.length < 10 ? this.record() : ((this.props.score > ranksStatic[ranksStatic.length-1]) ? this.record() : null)}
        <h3>The best scores:</h3>
        <ul>
        {this.list(ranksStatic)}
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
