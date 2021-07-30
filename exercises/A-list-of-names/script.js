function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  
  // Here I used a for loop to iterate through the array, and then used innerhtml += rather than 
  // just = as it stops it from overriding previous iterations. 

  for (let i=0 ; i < arrayOfPeople.length ; i++){
    content.innerHTML += `<h1>${arrayOfPeople[i].name}</h1><h2>${arrayOfPeople[i].job}</h2>`;
    console.log(arrayOfPeople[i].name + " " + arrayOfPeople[i].job)
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
