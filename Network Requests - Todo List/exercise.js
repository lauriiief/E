
function PrintOneToDo(response, n){
    return console.log(response[n]);
}

const response = fetch("https://jsonplaceholder.typicode.com/todos") 
                   .then((res) => res.json()) 
                   .then((val) => {PrintOneToDo(val, 5);}) 
                   .catch((err) => console.log(err))