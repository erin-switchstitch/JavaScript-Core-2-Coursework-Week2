function shoppingList(arrayOfItems) {

  const contentElem = document.querySelector("#content");
  
  contentElem.innerHTML +=`<ul>`;

  for (let index = 0; index < arrayOfItems.length; index++) {
    const element = arrayOfItems[index];
    console.log(element)
    contentElem.innerHTML += `<li>${element}</li>`;
  }

  contentElem.innerHTML += `</ul>`;
  
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
