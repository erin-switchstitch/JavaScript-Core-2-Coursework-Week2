	function wrapMultipleElements(el, wrapper) {
    // e.g. wrapMutipleElements('select', '.optionClass');
    // This will wrap all the elements with a class of "optionClass"
    // with the select element 
    var newElem = document.createElement(`${el}`)
    
    Array.prototype.forEach.call(document.querySelectorAll(`${wrapper}`), function(c){
      newElem.appendChild(c);
    });

    document.body.appendChild(newElem);
  }


function listOfColours(colours) {
 const targetElement = document.getElementById('content');
 targetElement.innerHTML += `<p id='pID'>Colours Available :</p>`;
 
  ;
  for (let index = 0; index < colours.length; index++) {
    console.log(colours[index]);

    // if (index ===0){
    //   targetElement.innerHTML += `<select>`;
    // }

    targetElement.innerHTML += `<option value='optionNum${index}' class='optionClass' alt='${colours[index]}'>${colours[index]}</option>`;
    
    // if (index === colours.length) {
    //    targetElement.innerHTML += `</select>`;
    // }
  
  };

  wrapMultipleElements('select', '.optionClass');
 
 
  // How is this second for loop running properly ??? It's in a function that isn't being run constantly
  // and the eventListener is inside for loop which supposedly only runs three times .... ???

  // You can add and attach event listeners to a specific object which is the linked to element
  // the function is defined within the for loop but javascript keeps it in memory even after 
  // the for loop is run. Functions in javascript keep their own scope (closure), you are able 
  // to pass functions to other functions, and they keep a copy of the variables that are 
  // accessable to them 
  
  for (let index = 0; index < colours.length; index++) {
    console.log("event run");
    const targetClass = document.querySelectorAll(`.optionClass`);
   
    
    targetClass[index].addEventListener("click",() =>{
      console.log(typeof(targetClass[index]));
      console.log(targetClass[index].textContent);
      //targetClass[index].style.color = "blue";
      
      //colorsAvailable.style.color = "blue";
      var colorsAvailable = document.getElementById("pID");
      //console.log(Array.from(colorsAvailable));  
      console.log((colorsAvailable));  
      colorsAvailable.style.color = targetClass[index].textContent;
    })

  // What do I do here - I have created a new p element with the id of pID however I'm assuming I need to use 
  // a live method to do this rather than a static one. Is getElementById or query selector live ?
    
  
}
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
