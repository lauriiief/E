
const toDotitle = document.getElementById("todo-title");
const toDocompleted = document.getElementById("todo-completed");
const submit = document.getElementById("submit-todo");

submit.addEventListener("click", async (element) => {
    element.preventDefault()
    const title = toDotitle.value;
    const completed = toDocompleted.checked
    const POSTdata = {
        title: title,
        completed: completed
    }

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {method: "POST", headers: {"content-type": "application/json"}, body: JSON.stringify(POSTdata)})
        const data = await response.json()
    }
    catch(error){
        console.log(error);
    }
})