function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

export default async function backTyper(string,element){
      let word = '';
      for (var i = string.length-1; i >= 0 ; i--) {
        word = string[i] + word;
        element.innerHTML = word;
        await sleep(50);
      }
    };
