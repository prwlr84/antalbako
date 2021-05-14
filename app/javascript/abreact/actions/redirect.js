function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

export default async function redirect(keycode){
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
    case 51:
    document.querySelector('.chBox').click();
    await sleep(1000);
    document.location.href = '/connect';
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
    case document.querySelector('.button3'):
    document.querySelector('.chBox').click();
    await sleep(1000);
    document.location.href = '/connect';
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
    case document.querySelector('.button3-mob'):
    document.querySelector('.chBox').click();
    await sleep(1000);
    document.location.href = '/connect';
    break;
    case document.querySelector('.opt1'):
    document.querySelector('.chBox').click();
    await sleep(1000);
    document.location.href = '/about';
    break;
    case document.querySelector('.opt2'):
    document.querySelector('.chBox').click();
    await sleep(1000);
    document.location.href = '/work';
    break;
    case document.querySelector('.opt3'):
    document.querySelector('.chBox').click();
    await sleep(1000);
    document.location.href = '/connect';
    break;
  default:
    return null;
  }
}
