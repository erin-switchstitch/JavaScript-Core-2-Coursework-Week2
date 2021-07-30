var cl = console.log;

function wrapMultipleElements(el, wrapper) {

    // e.g. wrapMultipleElements('select', '.optionClass');
    // This will wrap all the elements with a class of "optionClass" with the select element

    var newElem = document.createElement(`${el}`)
    Array.prototype.forEach.call(document.querySelectorAll(`${wrapper}`), function(c){
        newElem.appendChild(c);
    });
    document.body.appendChild(newElem);
};


function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  cl("current DOM todo list ...");
  cl(list);
  cl("current JS todo list ...");
  cl(todos);
  // Write your code to create todo list elements with completed and delete
  // buttons here, all todos should display inside the "todo-list" element.
  for (let i=0 ; i < todos.length ; i++){
    list.innerHTML =`
    <li class="list-group-item d-flex justify-content-between align-items-center">
    `${todos[i]}`;
    <span class="badge bg-primary rounded-pill">
    <i class="fa fa-check" aria-hidden="true"></i>
    <i class="fa fa-trash" aria-hidden="true"></i>
    </span>  
    </li> `
  }

  
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);
cl(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  cl(event);
  const taskValueInput = document.getElementById('todoInput').value;
  todos.push({task: taskValueInput, completed: false });
  cl(todos);

  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
