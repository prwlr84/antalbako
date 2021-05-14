import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLang } from '../actions';
import Menu from './menu.jsx';
import Ranks from '../components/ranks.jsx';
import game from '../actions/game';
import redirect from '../actions/redirect';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = { rank: false, score: 0 };

    this.stater = this.stater.bind(this);
  }

  stater(x){
    if (x > 0){
      this.setState({rank: true, score: x});
      document.querySelector('.overY').style.overflowY = 'scroll'
    } else if (x === 0){
      this.setState({rank: false, score: x});
    };
  }

  componentDidMount(){
    window.addEventListener('beforeunload', this.componentCleanup);
    window.addEventListener("keydown", e => {redirect(e.keyCode), false});
    window.addEventListener('click', e => {redirect(e.target), false });

    this.props.setLang(this.props.ip);

    setTimeout(()=>{document.querySelector('.x').addEventListener('mouseover', () => {document.querySelector('.x').style.opacity = '0.5'})}, 9000);
    setTimeout(()=>{document.querySelector('.x').addEventListener('mouseout', () => {document.querySelector('.x').style.opacity = '1'})}, 9000);
    setTimeout(()=>{document.querySelector('.x').addEventListener('click', () => {game(this.stater)})}, 9000);
    window.onload = function(){
      setTimeout(()=>{document.querySelector('.eggflash').style.display = 'none'}, 3000);
    }
  }

  componentCleanup(){
    const a = document.querySelector('.chBox');
    a.checked = false;
  }

  componentWillUnmount() {
      this.componentCleanup();
      window.removeEventListener('beforeunload', this.componentCleanup); // remove the event handler for normal unmounting
    }

  render() {
    return (
      <div><input className="chBox" type="checkbox" hidden/>
        <div className="app row screen overY">
          <img src="https://res.cloudinary.com/prwlr84/image/upload/v1620397543/signatureLogo_w3jejj_iscenj.png" style={{position: 'absolute', right: '-3%', bottom: '-5%'}} className='d-none d-sm-block'/>
          <div className="egg">
            <h5></h5>
            <h6>Time: <span className="time"></span>s</h6>
            <h6>Points: <span className="score"></span></h6>
            <button>START</button>
            <button>EXIT</button>
            <img className="eeLogo logo1"src="https://res.cloudinary.com/prwlr84/image/upload/v1617774649/react_zvssgr.svg" alt="" style={{display: 'none'}}/>
            <img className="eeLogo logo2"src="https://res.cloudinary.com/prwlr84/image/upload/v1617774649/rails_sr3jog.svg" alt="" style={{display: 'none'}}/>
            {this.state.rank === true ? <Ranks score={this.state.score} ip={this.props.ip}/> : null}
          </div>
          <div className="main col-12 col-sm-6">
            { this.props.lang ? <Menu /> : <h1>Loading...</h1> }
          </div>
          <div className='eggflash' style={{backgroundColor: 'rgba(255,0,0,0.3)', color: 'red', position: 'absolute', right: '5%', top: '5%', padding: '1%'}}>UP FOR A! EASTER EGG HUNT???</div>
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
