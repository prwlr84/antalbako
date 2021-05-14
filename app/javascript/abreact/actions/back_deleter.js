function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

export default async function backDeleter(string,element){
      let word = string;
      for (var i = 0; i < string.length - 1; i++) {
        word = word.slice(1)
        element.innerHTML = word;
        await sleep(50);
      }
    };
