import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLang } from '../actions';
import Greet from '../components/greet';

class Menu extends Component {
  componentDidMount(){
    let greet = Greet.filter(e => e.symbol === this.props.lang);
    let insert = greet[0] === undefined ? "Welcome here" : greet[0].text;

    let typed = new Typed('#typed', {
      strings: [
      `<p>${insert}!</p>^300\n<p class='hand'>I'm <span><span class="x">A</span>ntal Bako</span></p>^300\n<p>Full Stack Web Developer</p>^300\n<p>Please, choose from the following:</p>^300\n<p class="opt1">1 | About</p>^300\n<p class="opt2">2 | Work</p>^300\n<p class="opt3">3 | Connect</p>^300\n<input type="text" autofocus  />`],
      typeSpeed: 20,
      loop: false,
      showCursor: false
    });
  }

    componentWillUnmount() {
      this.typed ? this.typed.destroy() : null;
    }

  render() {
    return (
      <div>
        <h1 id="typed"></h1>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators(
 { setLang: setLang },
 dispatch
 );
}

function mapStateToProps(state) {
 return {
 ip: state.ip,
 lang: state.lang
 };
}


export default connect(mapStateToProps, mapDispatchToProps) (Menu);
