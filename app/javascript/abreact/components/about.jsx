import React, { Component } from 'react';
import redirect from '../actions/redirect';
import buttonnav from '../actions/buttonnav';

class About extends Component {
  componentCleanup(){
    const a = document.querySelector('.chBox');
    a.checked = false;
  }

  componentDidMount(){
    window.addEventListener("keydown", e => {redirect(e.keyCode), false});
    window.addEventListener('click', e => {redirect(e.target), false});
    window.addEventListener('beforeunload', this.componentCleanup);
    buttonnav({'.button0':'HOME|0', '.button2':'WORK|2', '.button3':'3|CONNECT'});
  }



  componentWillUnmount() {
    this.componentCleanup();
    window.removeEventListener('beforeunload', this.componentCleanup); // remove the event handler for normal unmounting
  }


  render(){
    return(
      <div className="container">
        <input className="chBox" type="checkbox" hidden/>
        <div className="app screen">
        <img src="https://res.cloudinary.com/prwlr84/image/upload/v1620397543/signatureLogo_w3jejj_iscenj.png" style={{position: 'fixed', right: '-3%', top: '-5%'}} className='d-none d-sm-block'/>
        <h1 className="title">About</h1>
        <div className="about row">
            <div className="about1">
              <div className="about-text1">
                <h2>Hi there!</h2>
                <h3>My name is Antal Bako</h3>
                <h4>Hey there! I've been geeking out over development since I was a kid. Life took me on a bit of a detour into the world of sales, but my passion for coding never faded. So, I decided to jump back in, and now I'm knee-deep in code and loving every bit of it.
                  I play around with cool tools like React, Ruby on Rails, Redux, TypeScript, PostgreSQL, and Capybara to build some awesome web features. I'm always open to exploring new technologies – the digital world is vast, and I'm all for diving into new territories.</h4>
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
                <h4>I hail from a quaint town in the heart of the Hungarian lowlands. At 18, I moved to Budapest for my studies and called it home for a decade. Afterwards, I spent nearly another decade in the beautifully flat Amsterdam. Now, I've settled in Spain, seeking a change of pace in its scenic mountains..</h4>
              </div>
            </div>
            <div className="about3">
              <div className="about-text3">
                <h4>In my free time, I'm an avid cyclist, whether it's on the flat terrains of Holland or the rolling hills of Andalucia. I'm a movie enthusiast, though I must admit, Netflix is starting to lose its charm for me! 😄 As for music, my taste spans from classical and jazz to electronic beats. Just steer clear of the mainstream for me!</h4>
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

