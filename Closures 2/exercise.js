
function printName() {
    let helloName = "Hello John";
    function inner() {
        setTimeout( () => {
            console.log(helloName);
        }, 1500)
        return helloName;
    }
    return inner;
}

printName()();
