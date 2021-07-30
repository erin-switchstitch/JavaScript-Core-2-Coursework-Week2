function todoList(todos) {
  const targetElement = document.getElementById('content');

  targetElement.innerHTML += `<ul>`;
  for (let index = 0; index < todos.length; index++) {
    targetElement.innerHTML += `<li id='liNum${index}' class='liClass'>${todos[index].todo}</li>`;
  };
  targetElement.innerHTML += `</ul>`;
  
  // How is this second for loop running properly ??? It's in a function that isn't being run constantly
  // and the eventListener is inside for loop which supposedly only runs three times .... ???
  
  
  // You can add and attach event listeners to a specific object which is the linked to element
  // the function is defined within the for loop but javascript keeps it in memory even after 
  // the for loop is run. Functions in javascript keep their own scope (closure), you are able 
  // to pass functions to other functions, and they keep a copy of the variables that are 
  // accessable to them 

  
  for (let index = 0; index < todos.length; index++) {

    const targetClass = document.querySelectorAll(`.liClass`);
    console.log(targetClass[index]);
    
    targetClass[index].addEventListener("click",() =>{

      if ((targetClass[index].style.textDecoration === "line-through") === true){
        targetClass[index].style.textDecoration = "none";
      } else {
        targetClass[index].style.textDecoration = "line-through";
      }
    })
  
}
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);