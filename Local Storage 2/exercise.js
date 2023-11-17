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

if (window){
  const userString = localStorage.getItem("user"); // Obtener el string de localStorage
  const userObject = JSON.parse(userString); // Convertir el string en un objeto
  console.log(userObject); // Imprimir el objeto en la consola
}

// Lanza error pero en principio el codigo esta bien, el error que lanza es porque no esta en el navegador
