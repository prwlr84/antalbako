import React, { Component } from 'react';

class Ranks extends Component {
  constructor(props){
    super(props);
    this.state = { upD: false, ranks:gon.ranks };

    this.record = this.record.bind(this);
  }

  record(){
    function postrank(z){
      const form = document.querySelector('#rankForm');
      const name = document.querySelector('input[name="name"]').value;
      const coun = document.querySelector('input[name="country"]').value;

      form.action = `http://localhost:3000/pages?country=${coun}&name=${name}&score=${z.props.score}`;
      console.log(z.state, 3);
      z.setState({upD: true});
      fetch('http://localhost:3000/pages/1/ranks')
        .then(r=>r.json())
        .then(json => {z.setState({ranks: json, upD: false});console.log(z.state, 3.5);})
      console.log(z.state, 4);
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

componentDidMount(){
    console.log(this.state, 2)
}


  componentDidUpdate(prevState) {
    // Typical usage (don't forget to compare props):
    console.log((this.state.upD !== prevState.upD));
    if (this.state.upD !== prevState.upD) {
    console.log(this.state, 6);
  }
 }
  render(){
    const word = [ "Awesome", "Fascinating", "Incredible", "Marvelous", "Shocking", "Stunning", "Surprising", "Unbelievable", "Wonderful",  "Prodigious" ];
    const ranks = this.state.ranks
    console.log(this.state, 1)
    return(
      <div className="ranks col-12 col-sm-6">
        <h2>{word[Math.floor(Math.random() * word.length)]}! You got {this.props.score} points!</h2>
        {ranks.length < 10 ? this.record() : ((this.props.score > ranks[ranks.length-1]) ? this.record() : null)}
        <h3>The best scores:</h3>
        <ul>
        {this.list(this.state.ranks)}
        </ul>
      </div>
    )
  }
}

export default Ranks;
