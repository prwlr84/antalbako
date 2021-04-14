import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { setLang } from '../actions';
import Greet from '../../assets/greet';

class Menu extends Component {
  log(){
      console.log('asdfgasdgasdg');
    }

  componentDidMount(){
    const greet = Greet.filter(e => e.symbol === this.props.lang);

      let typed = new Typed('#typed', {
        strings: [
        `<p>${greet[0].text}!</p>^50\n<p class='hand'>I'm <span><span class="x">A</span>ntal Bako</span></p>^50\n<p>Full Stack Web Developer</p>^50\n<p>Please, choose from the following:</p>^50\n<p class="opt1">1 | About</p>^50\n<p class="opt2">2 | Work</p>^50\n<p class="opt3">3 | Connect</p>^50\n<input type="text" autofocus  />`],
        typeSpeed: 20,
        loop: false,
        showCursor: false
      });
  }

    componentWillUnmount() {
      this.typed.destroy();
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
