import React, { Component } from 'react';
import redirect from '../actions/redirect';
import buttonTyper from '../actions/button_typer';
import backTyper from '../actions/back_typer';

class About extends Component {
  componentDidMount(){
    window.addEventListener("keydown", e => {redirect(e.keyCode), false});
    window.addEventListener('click', e => {redirect(e.target), false});

    document.querySelector('.button0').addEventListener('mouseover', ()=> {backTyper('HOME|0', document.querySelector('.button0') )});
    document.querySelector('.button0').addEventListener('mouseout', ()=> {document.querySelector('.button0').innerHTML = '0'});
    document.querySelector('.button2').addEventListener('mouseover', ()=> {backTyper('WORK|2', document.querySelector('.button2') )});
    document.querySelector('.button2').addEventListener('mouseout', ()=> {document.querySelector('.button2').innerHTML = '2'});
    document.querySelector('.button3').addEventListener('mouseover', ()=> {buttonTyper('3|CONNECT', document.querySelector('.button3') )});
    document.querySelector('.button3').addEventListener('mouseout', ()=> {document.querySelector('.button3').innerHTML = '3'});
  }

  render(){
    return(
      <div>
        <input className="chBox" type="checkbox" hidden/>
        <div className="app screen">
        <img src="https://res.cloudinary.com/prwlr84/image/upload/v1620397543/signatureLogo_w3jejj_iscenj.png" style={{position: 'absolute', right: '-3%', top: '-5%'}} className='d-none d-sm-block'/>
        <h1 className="title">About</h1>
        <div className="about row">
            <div className="about1">
              <div className="about-text1">
                <h2>Hi there!</h2>
                <h3>My name is Antal Bako</h3>
                <h4>Instead of humans, let's communicate now with computers!<br/>
                  After more than a decade in sales, felt time for a change.<br/>
                  I have decided to return my old passion and successfully completed Le Wagon's Web Development bootcamp in Amsterdam. I had great fun with all the challenges (and no support tickets :) ) and I'm always ready for new ones.  <br/>
                  Looking for opportunities in Web Development, with experience in React JS, Ruby on Rails, AJAX, relational and non-relational databases and more.
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
                <h4>I was born in a town in the middle of the Hungarian lowlands, then I moved to Budapest for my studies at the age of 18, and I lived there for 10 years.<br/> Next stop was the evenly
                flat Amsterdam for almost 10 another years and currently relocated to Spain to try a bit more "elevated" lifestyle in the mountains.</h4>
              </div>
            </div>
            <div className="about3">
              <div className="about-text3">
                <h4>In my free time I love to pedal, flat like Holland or hills like Andalucia, doesn't matter.<br/>
                  Like to watch movies a lot, Netflix is gettig boring :D<br/>
                  And music! <br/>Everything from classics through jazz to electronic music, <br/> but no mainstream please!!!</h4>
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
          <h2 className='button0 link'>0</h2>
          <h2 className='button2 link'>2</h2>
          <h2 className='button3 link'>3</h2>
          <h2 className='button0-mob link'>0|HOME</h2>
          <h2 className='button2-mob link'>2|WORK</h2>
          <h2 className='button3-mob link'>3|CONNECT</h2>
        </div>
      </div>)
  }
}

export default About;

