import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import redirect from '../actions/redirect';
import buttonTyper from '../actions/button_typer';
import backTyper from '../actions/back_typer';


class Work extends Component {
  constructor(props) {
    super(props);
    this.state = { list: true, current: "" };

    this.toggleList = this.toggleList.bind(this);
  }


  componentDidMount(){
    window.addEventListener("keydown", e => {redirect(e.keyCode), false});
    window.addEventListener('click', e => {redirect(e.target), false});

    document.querySelector('.button0').addEventListener('mouseover', ()=> {backTyper('HOME|0', document.querySelector('.button0') )});
    document.querySelector('.button0').addEventListener('mouseout', ()=> {document.querySelector('.button0').innerHTML = '0'});
    document.querySelector('.button1').addEventListener('mouseover', ()=> {buttonTyper('1|ABOUT', document.querySelector('.button1') )});
    document.querySelector('.button1').addEventListener('mouseout', ()=> {document.querySelector('.button1').innerHTML = '1'});
    document.querySelector('.button3').addEventListener('mouseover', ()=> {buttonTyper('3|CONNECT', document.querySelector('.button3') )});
    document.querySelector('.button3').addEventListener('mouseout', ()=> {document.querySelector('.button3').innerHTML = '3'});
 }

  list(){
    return(
      <div className="col-sm-6" id="list">
        {this.props.work.map(e => {return(
          <div key={e.name} className="frame3">
            <img className="link" src={e.img} alt="" onClick={() => this.toggleList(e.name)} />
            <h3 className="link" onClick={() => this.toggleList(e.name)}>{e.name}</h3>
            <p className="link" onClick={() => this.redirect(e.url)}>{e.url}</p>
          </div>
        )})}
      </div>
      )
  }

  redirect(url){
      document.location.href = `http://${url}`;
    }

  detail(name){
    const current = this.props.work.find(e => e.name === name);
    return(
      <div className="col-sm-6" id="detail">
        <div className="frame">
          <h1>{current.name}</h1>
          <h3 className="link" onClick={() => this.redirect(current.url)}>{current.url}</h3>
          <img src={current.img} alt=""/>
          {JSON.parse(current.desc).map(e => {return(<h4 key={e}>{e}</h4>)})}
          <br/>
          <h5 className="link" onClick={() => this.toggleList("")}>GO BACK</h5>
        </div>
      </div>
      )
  }

  async toggleList(n){
    var elems = document.querySelectorAll('.frame3');
    var detail = document.querySelector('.frame');
    var elemCount = elems.length;

    for (var i = 0; i < elemCount; i++) {
      elems[i].classList.toggle("fade-out");
    }
    await new Promise(resolve => setTimeout(resolve, 600));
    this.setState({list: !this.state.list, current: n});
  }

  render(){
    return(
      <div>
        <input className="chBox" type="checkbox" hidden/>
        <div className="app screen">
          <img src="https://res.cloudinary.com/prwlr84/image/upload/v1620397543/signatureLogo_w3jejj_iscenj.png" style={{position: 'absolute', left: '-5%', bottom: '-5%'}} className='d-none d-sm-block'/>
          <h1 className="title">Work</h1>
          <div className="work row">
            <div className="col-sm-6">
              <h1 id='workTitle'>Have a look around!</h1>
            </div>
            <div style={{overflowX: 'visible', minHeight: '50px', width: '100%', color: 'red', textAlign: 'end'}} className="d-sm-none spacer">PULL ME UP</div>
            {this.state.list ? this.list() : this.detail(this.state.current)}
          </div>
          <h2 className='button0 link'>0</h2>
          <h2 className='button1 link'>1</h2>
          <h2 className='button3 link'>3</h2>
          <h2 className='button0-mob link'>0|HOME</h2>
          <h2 className='button1-mob link'>1|ABOUT</h2>
          <h2 className='button3-mob link'>3|CONNECT</h2>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
 return {
 work: state.work
 };
}

export default connect(mapStateToProps, null)(Work);

