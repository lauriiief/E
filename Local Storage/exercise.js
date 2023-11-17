const user = {
  id: 1,
  name: "John",
  age: 25,
};

function KeepUser(object){
  if (typeof window !== 'undefined') {
    const ls = localStorage.setItem("user");
    localStorage.setItem("user", JSON.stringify(object));
  }
  return JSON.stringify(object);
  
}

console.log(KeepUser(user));