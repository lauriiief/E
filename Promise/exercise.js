const number = 15;

let numPromise = new Promise((resolve, reject) => {
    if(number > 10){
        resolve(number);
    }else{
        reject(number);
    }
})

numPromise
  .then((val) => console.log(val))
  .catch((err) => console.error('This number:', err, 'gets an error'))