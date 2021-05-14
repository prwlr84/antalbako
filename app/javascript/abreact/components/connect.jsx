import React, { Component } from 'react';
import redirect from '../actions/redirect';
import buttonnav from '../actions/buttonnav';



class Connect extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount(){
    window.addEventListener('beforeunload', this.componentCleanup);
    window.addEventListener('click', e => {redirect(e.target), false});
    buttonnav({'.button0':'HOME|0', '.button1':'1|ABOUT', '.button2':'WORK|2'});
  }

  componentCleanup(){
    const a = document.querySelector('.chBox');
    a.checked = false;
  }

  componentWillUnmount(){
    this.componentCleanup();
    window.removeEventListener('beforeunload', this.componentCleanup); // remove the event handler for normal unmounting
  }

  sendmail(){
    const form = document.querySelector('#emailForm');
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    form.action = `http://antalbako.codes/mail?subject=${subject}&name=${name}&email=${email}&message=${message}`;
  }

  render(){
    return(
      <div>
        <input className="chBox" type="checkbox" hidden/>
        <div className="app screen overY">
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
          <h2 className='button0 link'>0</h2>
          <h2 className='button1 link'>1</h2>
          <h2 className='button2 link'>2</h2>
          <h2 className='button0-mob'>0|HOME</h2>
          <h2 className='button1-mob'>1|ABOUT</h2>
          <h2 className='button2-mob'>2|WORK</h2>
        </div>
      </div>
    )
  }
}

export default Connect;

