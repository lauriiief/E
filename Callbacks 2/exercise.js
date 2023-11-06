
function repeatHello(callback){
    setInterval(callback, 1000)
    //setTimeout(() => clearInterval(id), 3000)
    // In this exercise we don't need to clear the interval so the line 4 doesn't need to be here (we are creating a constant loop / interval)
}

repeatHello(() => console.log("Hello")); // We get infinite hellos every 1 second

// We use an arrow function to be able to change the function every time, not be 'forced' to a concrete function? I don't really know for sure
