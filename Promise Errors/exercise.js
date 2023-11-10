const isLogged = true;

function checkLoggedIn(isLogged) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isLogged){
                resolve(Math.random);
            }else{
                reject(new Error("Not logged in!"));
            }
        }, 500);
    })
}

function getDetails(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(number > 0.5){
                resolve({name: "John", age: 24});
            }else{
                reject(new Error("It's me, hi, I'm the problem it's me"));
            }
        }, 500);
    })
}

checkLoggedIn(isLogged)
  .then(getDetails)
  .then((val) => console.log(val))
  .catch((err) => console.error(err))
  .finally(() => console.log("code executed"))
