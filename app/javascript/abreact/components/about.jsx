import React, { Component } from 'react';
import Typed from 'typed.js';

class About extends Component {
  componentDidMount(){
    async function redirect(keycode){
      switch(keycode){
        case 48:
        document.querySelector('.chBox').click();
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/';
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
        case document.querySelector('.button0'):
        document.querySelector('.chBox').click()
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/';
        break;
        case document.querySelector('.button2'):
        document.querySelector('.chBox').click()
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/work';
        break;
        case document.querySelector('.button3'):
        document.querySelector('.chBox').click()
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/connect';
        break;
        case document.querySelector('.button0-mob'):
        document.querySelector('.chBox').click()
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/';
        break;
        case document.querySelector('.button2-mob'):
        document.querySelector('.chBox').click()
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/work';
        break;
        case document.querySelector('.button3-mob'):
        document.querySelector('.chBox').click()
        await new Promise(r => setTimeout(r, 1000));
        document.location.href = '/connect';
        break;
      default:
        return null;
      }
    }

    window.addEventListener("keydown", e => {redirect(e.keyCode), false});

    window.addEventListener('click', e => {redirect(e.target), false});

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

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
    document.querySelector('.button2').addEventListener('mouseover', ()=> {buttonTyper('2|WORK', document.querySelector('.button2') )});
    document.querySelector('.button2').addEventListener('mouseout', ()=> {document.querySelector('.button2').innerHTML = '2'});
    document.querySelector('.button3').addEventListener('mouseover', ()=> {buttonTyper('3|CONNECT', document.querySelector('.button3') )});
    document.querySelector('.button3').addEventListener('mouseout', ()=> {document.querySelector('.button3').innerHTML = '3'});
  }

  render(){
    return(
      <div>
        <input className="chBox" type="checkbox"  style={{display: 'none'}}/>
        <div className="app screen">
        <h1 className="title">About</h1>
        <div className="about row">
            <div className="about1">
              <div className="about-text1">
                <h2>Hi there!</h2>
                <h3>My name is Antal Bako</h3>
                <h4>I have been communicating with humans as a profession for more than 10 years, let's try with computers too!<br/>
                  After more than a decade in sales, felt time for a change.<br/>
                  I have decided to return my old passion and successfully completed Le Wagon's Web Development bootcamp in Amsterdam. I had great fun with all the challenges, but the camp is over and I'm always up for new ones!<br/>
                  Looking for new opportunities in Web Development, with experience in React JS, Ruby on Rails, AJAX, relational and non-relational databases and more. Absolutely open for new languages with excellent capacity to retain new things.
                </h4>
              </div>
              <div className="frame3">
                <div className="blk">
                  <div className="glitchL">
                    <div className="glitch-img5"></div>
                    <div className="glitch-img5"></div>
                    <div className="glitch-img5"></div>
                    <div className="glitch-img5"></div>
                    <div className="glitch-img5"></div>
                  </div>
                </div>
              </div>
              <div className="frame3">
                <div className="blk">
                  <div className="glitchH">
                    <div className="glitch-img6"></div>
                    <div className="glitch-img6"></div>
                    <div className="glitch-img6"></div>
                    <div className="glitch-img6"></div>
                    <div className="glitch-img6"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about2">
              <div className="frame3">
                <div className="blk">
                  <div className="glitchL">
                    <div className="glitch-img3"></div>
                    <div className="glitch-img3"></div>
                    <div className="glitch-img3"></div>
                    <div className="glitch-img3"></div>
                    <div className="glitch-img3"></div>
                  </div>
                </div>
              </div>
              <div className="frame3">
                <div className="blk">
                  <div className="glitchL">
                    <div className="glitch-img4"></div>
                    <div className="glitch-img4"></div>
                    <div className="glitch-img4"></div>
                    <div className="glitch-img4"></div>
                    <div className="glitch-img4"></div>
                  </div>
                </div>
              </div>
              <div className="about-text2">
                <h4>I was born in a town in the middle of the Hungarian lowlands, then when I was 18 I moved to Budapest for my studies and I lived there for 10 years.<br/> Next stop was the evenly
                flat Amsterdam for almost 10 another years and currently moved to Spain to try a bit more "elevated" lifestyle in the mountains.</h4>
              </div>
            </div>
            <div className="about3">
              <div className="about-text3">
                <h4>In my free time I love to pedal, flat like Holland or hills like in Andalucia, doesn't matter.<br/>
                  Like to watch movies a lot, Netflix is gettig boring... :D<br/>
                  And music! Everything from classics through jazz to electronic music, but no mainstream please!!!</h4>
              </div>
              <div className="frame3">
                <div className="blk">
                  <div className="glitchH">
                    <div className="glitch-img1"></div>
                    <div className="glitch-img1"></div>
                    <div className="glitch-img1"></div>
                    <div className="glitch-img1"></div>
                    <div className="glitch-img1"></div>
                  </div>
                </div>
              </div>
              <div className="frame3">
                <div className="blk">
                  <div className="glitchL">
                    <div className="glitch-img2"></div>
                    <div className="glitch-img2"></div>
                    <div className="glitch-img2"></div>
                    <div className="glitch-img2"></div>
                    <div className="glitch-img2"></div>
                  </div>
                </div>
              </div>
            </div>
        </div>
          <h2 className='button0'>0</h2>
          <h2 className='button2'>2</h2>
          <h2 className='button3'>3</h2>
          <h2 className='button0-mob'>0|HOME</h2>
          <h2 className='button2-mob'>2|WORK</h2>
          <h2 className='button3-mob'>3|CONNECT</h2>
        </div>
      </div>)
  }
}

export default About;

