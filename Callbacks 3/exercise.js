
function repeatHello(callback){ 
    let id = setInterval(callback, 1000)
    setTimeout(() => clearInterval(id), 6000) // Stop after 6 seconds AKA 5 hello's
}

repeatHello(() => console.log("Hello")); // We get 5 hellos