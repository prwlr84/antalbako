import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLang } from '../actions';
import Menu from './menu.jsx';
import Ranks from '../components/ranks.jsx';
import game from './game';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = { rank: false, score: 0 };

    this.stater = this.stater.bind(this);
  }

  stater(x){
    if (x > 0){
      this.setState({rank: true, score: x});
    } else if (x === 0){
      this.setState({rank: false, score: x});
    };
  }

  componentDidMount(){
    async function redirect(keycode){
      switch(keycode){
        case 49:
        document.querySelector('.chBox').click();
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/about';
        break;
        case 50:
        document.querySelector('.chBox').click()
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/work';
        break;
        case 51:
        document.querySelector('.chBox').click()
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/connect';
        break;
        case document.querySelector('.opt1'):
        document.querySelector('.chBox').click()
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/about';
        break;
        case document.querySelector('.opt2'):
        document.querySelector('.chBox').click()
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/work';
        break;
        case document.querySelector('.opt3'):
        document.querySelector('.chBox').click()
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/connect';
        break;
      default:
        return null;
      }
    }

    window.addEventListener("keydown", e => {redirect(e.keyCode), false});

    window.addEventListener('click', e => {redirect(e.target), false });

    this.props.setLang(this.props.ip);

    setTimeout(()=>{document.querySelector('.x').addEventListener('mouseover', () => {document.querySelector('.x').style.opacity = '0.5'})}, 9000);
    setTimeout(()=>{document.querySelector('.x').addEventListener('mouseout', () => {document.querySelector('.x').style.opacity = '1'})}, 9000);
    setTimeout(()=>{document.querySelector('.x').addEventListener('click', () => {game(this.stater)})}, 9000);
  }

  render() {
    return (
      <div><input className="chBox" type="checkbox"  style={{display: 'none'}}/>
        <div className="app row screen">
          <div className="egg">
            <h5></h5>
            <h6>Time: <span className="time"></span>s</h6>
            <h6>Points: <span className="score"></span></h6>
            <button>START</button>
            <button>EXIT</button>
            <img className="eeLogo logo1"src="https://res.cloudinary.com/prwlr84/image/upload/v1617774649/react_zvssgr.svg" alt="" style={{display: 'none'}}/>
            <img className="eeLogo logo2"src="https://res.cloudinary.com/prwlr84/image/upload/v1617774649/rails_sr3jog.svg" alt="" style={{display: 'none'}}/>
            {this.state.rank === true ? <Ranks score={this.state.score} /> : null}
          </div>
          <div className="main col-12 col-sm-6">
            { this.props.lang ? <Menu /> : <h1>Loading...</h1> }
          </div>
        </div>
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


export default connect(mapStateToProps, mapDispatchToProps) (Main);
