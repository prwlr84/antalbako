import React, { Component } from 'react';


class Connect extends Component {
  constructor(props) {
    super(props);
    //this.state = { list: true, current: "" };

    //this. = this..bind(this);
  }


  componentDidMount(){
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function redirect(keycode){
      switch(keycode){
        case 48:
        document.querySelector('.chBox').click();
        await sleep(1000);
        document.location.href = '/';
        break;
        case 49:
        document.querySelector('.chBox').click();
        await sleep(1000);
        document.location.href = '/about';
        break;
        case 50:
        document.querySelector('.chBox').click();
        await sleep(1000);
        document.location.href = '/work';
        break;
        case document.querySelector('.button0'):
        document.querySelector('.chBox').click();
        await sleep(1000);
        document.location.href = '/';
        break;
        case document.querySelector('.button1'):
        document.querySelector('.chBox').click();
        await sleep(1000);
        document.location.href = '/about';
        break;
        case document.querySelector('.button2'):
        document.querySelector('.chBox').click();
        await sleep(1000);
        document.location.href = '/work';
        break;
        case document.querySelector('.button0-mob'):
        document.querySelector('.chBox').click();
        await sleep(1000);
        document.location.href = '/';
        break;
        case document.querySelector('.button1-mob'):
        document.querySelector('.chBox').click();
        await sleep(1000);
        document.location.href = '/about';
        break;
        case document.querySelector('.button2-mob'):
        document.querySelector('.chBox').click();
        await sleep(1000);
        document.location.href = '/work';
        break;
      default:
        return null;
      }
    }

    window.addEventListener("keydown", e => {redirect(e.keyCode), false});

    window.addEventListener('click', e => {redirect(e.target), false});

    async function buttonTyper(string,element){
      let word = '';
      for (var i = 0; i < string.length; i++) {
        word = word + string[i];
        element.innerHTML = word;
        await sleep(50);
      }
    };


  document.querySelector('.button0').addEventListener('mouseover', ()=> {buttonTyper('0|HOME', document.querySelector('.button0') )});
  document.querySelector('.button0').addEventListener('mouseout', ()=> {document.querySelector('.button0').innerHTML = '0'});
  document.querySelector('.button1').addEventListener('mouseover', ()=> {buttonTyper('1|ABOUT', document.querySelector('.button1') )});
  document.querySelector('.button1').addEventListener('mouseout', ()=> {document.querySelector('.button1').innerHTML = '1'});
  document.querySelector('.button2').addEventListener('mouseover', ()=> {buttonTyper('2|WORK', document.querySelector('.button2') )});
  document.querySelector('.button2').addEventListener('mouseout', ()=> {document.querySelector('.button2').innerHTML = '2'});

 }

  render(){
    return(
      <div>
        <input className="chBox" type="checkbox"  style={{display: 'none'}}/>
        <div className="app screen">
          <h1 className="title">Connect</h1>
          <div className="connect row">
            <div className="col-sm-6">
              <h2 className="conh2">Wanna reach out? Send me an e-mail!</h2>
              <form action="">
                <div className="frame3"><input type="text" placeholder="Name"/></div>
                <div className="frame3"><input type="email" placeholder="E-mail"/></div>
                <div className="frame3"><input type="text" placeholder="Subject"/></div>
                <div className="frame3"><textarea placeholder="Here comes the message"/></div>
                <div className="frame3"><input type="submit"/></div>
              </form>
              <div className="social">
                <h2 className="conh2">Or find me on the usual platforms:</h2>
                <div>
                  <i className="fab fa-github fa-3x icon"></i>
                  <i className="fab fa-linkedin fa-3x icon"></i>
                  <i className="fab fa-strava fa-3x icon"></i>
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

