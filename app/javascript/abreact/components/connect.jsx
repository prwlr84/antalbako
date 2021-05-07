import React, { Component } from 'react';
import redirect from '../actions/redirect';
import buttonTyper from '../actions/button_typer';

class Connect extends Component {
  constructor(props) {
    super(props);
    //this.state = { list: true, current: "" };

    //this. = this..bind(this);
  }


  componentDidMount(){
    window.addEventListener('click', e => {redirect(e.target), false});

    document.querySelector('.button0').addEventListener('mouseover', ()=> {buttonTyper('0|HOME', document.querySelector('.button0') )});
    document.querySelector('.button0').addEventListener('mouseout', ()=> {document.querySelector('.button0').innerHTML = '0'});
    document.querySelector('.button1').addEventListener('mouseover', ()=> {buttonTyper('1|ABOUT', document.querySelector('.button1') )});
    document.querySelector('.button1').addEventListener('mouseout', ()=> {document.querySelector('.button1').innerHTML = '1'});
    document.querySelector('.button2').addEventListener('mouseover', ()=> {buttonTyper('2|WORK', document.querySelector('.button2') )});
    document.querySelector('.button2').addEventListener('mouseout', ()=> {document.querySelector('.button2').innerHTML = '2'});
  }

  sendmail(){
    debugger
    const form = document.querySelector('#emailForm');
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    console.log('Thank you for your mail!');
    form.action = `http://antalbako.codes/mail?subject=${subject}&name=${name}&email=${email}&message=${message}`;
  }

  render(){
    return(
      <div>
        <input className="chBox" type="checkbox"  style={{display: 'none'}}/>
        <div className="app screen">
          <img src="https://res.cloudinary.com/prwlr84/image/upload/v1620397543/signatureLogo_w3jejj_iscenj.png" style={{position: 'absolute', right: '-3%', bottom: '-5%'}} className='d-none d-sm-block'/>
          <h1 className="title">Connect</h1>
          <div className="connect row">
            <div className="col-sm-6">
              <h2 className="conh2">Wanna reach out? Send me an e-mail!</h2>
              <form id="emailForm" onSubmit={()=>this.sendmail()} method='POST'>
                <div className="frame3"><input type="text" placeholder="Name" name="name" required="required"/></div>
                <div className="frame3"><input type="email" placeholder="E-mail" name="email" required="required"/></div>
                <div className="frame3"><input type="text" placeholder="Subject" name="subject"/></div>
                <div className="frame3"><textarea placeholder="Here comes the message" name="message"required="required"/></div>
                <div className="frame3"><input type="submit" value="Send it!"/></div>
              </form>
              <div className="social">
                <h2 className="conh2">Or find me on the usual platforms:</h2>
                <div>
                  <a href="https://github.com/prwlr84"><i className="fab fa-github fa-3x icon"></i></a>
                  <a href="https://www.linkedin.com/in/antalbako/"><i className="fab fa-linkedin fa-3x icon"></i></a>
                  <a href="https://www.strava.com/athletes/21878225"><i className="fab fa-strava fa-3x icon"></i></a>
                </div>
              </div>
            </div>
          </div>
          <h2 className='button0'>0</h2>
          <h2 className='button1'>1</h2>
          <h2 className='button2'>2</h2>
          <h2 className='button0-mob'>0|HOME</h2>
          <h2 className='button1-mob'>1|ABOUT</h2>
          <h2 className='button2-mob'>2|WORK</h2>
        </div>
      </div>
    )
  }
}

export default Connect;

