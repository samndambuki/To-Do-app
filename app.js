//target id selectors
let form = document.getElementById("form");
let input  = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

//event listener for the form
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});

//create formvalidation function
let formValidation = ()=>{
    //if statement to prevent users from submitting blank fileds
    if(input.value === ""){
        msg.innerHTML = "Todo  cannot be blank";
        console.log("failure");
    }
    else{
        console.log("success");
        msg.innerHTML = "";

        acceptData();
    }
}

//object that stores data from input fields
let data = {};
//use function to collect data 
let acceptData = () =>{
    data["text"] = input.value;
    console.log(data);
    createTodo();
}


//create todo using js template literals
//this - element that fired the event
let createTodo = () =>{
    todos.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class="options">
        <i onClick="editToDo(this)" class="fas fa-edit"></i>
        <i onClick="deleteToDo(this)" class="fas fa-trash-alt"></i>
    </span>
</div>
    `;

    input.value = "";
}

let deleteToDo = (e)=>{
    e.parentElement.parentElement.remove();
}

let editToDo = (e) =>{
    input.value  = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();

}
