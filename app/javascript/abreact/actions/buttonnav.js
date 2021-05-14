import buttonTyper from './button_typer';
import backTyper from './back_typer';
import buttonDeleter from './button_deleter';
import backDeleter from './back_deleter';

export default function buttonnav(obj){
    for (const [key, value] of Object.entries(obj)) {
      const regex = new RegExp('foo*');
      if( 0 <= value[0] && 9 >= value[0]){
        document.querySelector(key).addEventListener('mouseover', ()=> {buttonTyper(value, document.querySelector(key))});
        document.querySelector(key).addEventListener('mouseout', ()=> {buttonDeleter(value, document.querySelector(key))});
      } else {
        document.querySelector(key).addEventListener('mouseover', ()=> {backTyper(value, document.querySelector(key))});
        document.querySelector(key).addEventListener('mouseout', ()=> {backDeleter(value, document.querySelector(key))});
      }
    }
}
