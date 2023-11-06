
function printAsyncName(callback, name) {
    setInterval(callback, 1000); // Hello after 1 second
    setInterval(() => console.log(name), 2000); // name after 2 seconds
}



printAsyncName(() => console.log("Hello"), "Laura"); // We get two hellos every one name
console.log("Something running first");


  