const game = (callback) => {
    const x = document.querySelector('.x');
    const egg = document.querySelector('.egg');
    const logos = [document.querySelector('.logo1'), document.querySelector('.logo2')]
    const startB = document.querySelector('div.egg>button:first-of-type');
    const exitB = document.querySelector('div.egg>button:nth-of-type(2)');
    const scoreDisp = document.querySelector('.score');
    const timeDisp = document.querySelector('.time');
    let score;
    let interval;


    function init(){score = 0; scoreDisp.textContent = 0; timeDisp.textContent = 60; egg.style.display = 'flex'; document.querySelector('h5').textContent = 'WHACK-THE-STACK';}
    function inc(){score++; return score};
    function writeScore(x){scoreDisp.textContent = x};
    function hide(x){x.style.display = 'none'};
    logos.forEach(item => {item.addEventListener('click', () => {inc();writeScore(score);})});

    init();

    function start(){
      const randLogo = logos[Math.floor(logos.length * Math.random())];
      const randTime = Math.floor(Math.random() * 2000) + 500;
      const randPosL = Math.floor(Math.random() * 80) + 10;
      const randPosT = Math.floor(Math.random() * 80) + 10;
      randLogo.style.display = 'flex';
      randLogo.style.left =`${randPosL}%`;
      randLogo.style.top = `${randPosT}%`;

      function autohide(){randLogo.style.display = 'none'};
      randLogo.addEventListener('click', () => {hide(randLogo)});


      setTimeout(autohide, randTime);
    }

    function timer(){
        let sixty = 10;
        const loop = function() {
          console.log(score);
          parseInt(timeDisp.textContent) > 0 ? timeDisp.textContent = sixty : 0;
          sixty--;
          innerFunc(sixty,score);
        };
        const innerFunc = function(t,s) {
          if(t < 0){
            clearInterval(interval);
            callback(score);
          }
          (logos[0].style.display === 'none' && logos[1].style.display === 'none') ? start() : null;
        }
        interval = setInterval(loop, 1000);
    };

    startB.addEventListener('click', () => {init();timer()});
    exitB.addEventListener('click', ()=>{clearInterval(interval); hide(egg)});

}

export default game;
