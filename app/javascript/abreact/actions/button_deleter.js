function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

export default async function buttonDeleter(string,element){
      let word = string;
      for (var i = string.length - 1; i > 0; i--) {
        word = word.slice(0,-1)
        element.innerHTML = word;
        await sleep(50);
      }
    };
