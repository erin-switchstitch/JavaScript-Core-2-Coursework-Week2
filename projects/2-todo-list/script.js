const cl = console.log;

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  
];



// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  //cl(event);
  const taskValueInput = document.getElementById('todoInput').value;
  todos.push({task: taskValueInput, completed: false });
  cl(todos);
  populateTodoList(todos);
  
  // function preventDefault() {
  //     cl(taskValueInput);
  //     //taskValueInput = 'none';
  // }


  event.preventDefault();

  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  document.getElementById('todoInput').value ="";
  //taskValueInput = "10";
}



function populateTodoList(todosValue) {
  let list = document.getElementById("todo-list");
 
  // Write your code to create todo list elements with completed and delete
  // buttons here, all todos should display inside the "todo-list" element.

  list.innerHTML = "";

  for (let index = 0; index < todosValue.length; index++) {
    const element = todosValue[index];
    const elementTask = element.task; //cl(elementTask);
    const elementCheck = element.completed;//cl(elementCheck);
    cl(todosValue);
    
    
    list.innerHTML +=`
    <li class="list-group-item d-flex justify-content-between align-items-center">${elementTask}
    <span class="badge bg-primary rounded-pill">
    <i class="fa fa-check" aria-hidden="true"></i>
    <i class="fa fa-trash" aria-hidden="true"></i>
    </span>  
    </li> `

  }

  const checkElement = document.getElementsByClassName("fa-check"); 
  const trashElement = document.getElementsByClassName("fa-trash"); 
  const liElement = document.getElementsByClassName("list-group-item");

  for (let index = 0; index < liElement.length; index++) {
    const element = todosValue[index];
    
    checkElement[index].addEventListener("click",function(){
      if(element.completed === false) {
        liElement[index].style.textDecoration = "line-through";
        element.completed = true;
      } else if (element.completed === true){
        liElement[index].style.textDecoration = "none";
        element.completed = false;
      }
    })
    
    trashElement[index].addEventListener("click",function(){
      liElement[index].remove();
    })
  }
    
  
}





// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
