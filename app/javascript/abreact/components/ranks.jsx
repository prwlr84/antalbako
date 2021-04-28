import React, { Component } from 'react';

class Ranks extends Component {
  constructor(props){
    super(props);
    this.state = {
      upD: false,
      ranks:[],
      country: "Country"
    }

    this.record = this.record.bind(this);
    this.postrank = this.postrank.bind(this);
    this.getNewRanks = this.getNewRanks.bind(this);
  }

  postrank(){
    const form = document.querySelector('#rankForm');
    const name = document.querySelector('input[name="name"]').value;
    const coun = document.querySelector('input[name="country"]').value;

    form.action = `http://antalbako.codes/pages?country=${coun}&name=${name}&score=${this.props.score}`;
    document.querySelector('#recordForm').style.display = 'none';
    document.querySelector("#congrats").style.display = 'none';
    setTimeout(this.getNewRanks, 2000);
  }

  async getNewRanks(){
    const newrank  = await fetch('http://antalbako.codes/pages/1/ranks')
      .then(r=>r.json());
    this.setState({ranks: newrank});
  }

  record(){
    return(
      <div id='recordForm'>
        <h1 id="ranksTitle">Congrats! That's in the best 10! Please, add your details to the hall of fame:</h1>
        <form id='rankForm' onSubmit={this.postrank} method='POST'>
          <input type="text" name='name' placeholder="Name" required="required"/>
          <input type="text" name='country' placeholder={this.state.country} required="required"/>
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

  async componentDidMount(){
    const rank  = await fetch('/pages/1/ranks')
      .then(r=>r.json());
    const country = await fetch(`http://api.ipstack.com/${this.props.ip}?access_key=49ceea9b1409ef0c0674effff735b5bd&format=1`)
      .then(r=>r.json())
      .then(json => {return json.country_name ? json.country_name : "Country"});
    this.setState({ranks: rank, country: country});
  }

  render(){
    const word = [ "Awesome", "Fascinating", "Incredible", "Marvelous", "Shocking", "Stunning", "Surprising", "Unbelievable", "Wonderful" ];
    const ranks = this.state.ranks
    return(
      <div className="ranks col-12 col-sm-6">
        <h2 id="congrats">{word[Math.floor(Math.random() * word.length)]}! You got {this.props.score} points!</h2>
        {ranks.length < 10 ? this.record() : ((this.props.score > ranks[ranks.length-1].score) ? this.record() : null)}
        <h3>The best scores:</h3>
        <ul>
        {this.list(this.state.ranks)}
        </ul>
      </div>
    )
  }
}

export default Ranks;
