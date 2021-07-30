function wrapMultipleElements(el, wrapper, value) {
  // e.g. wrapMutipleElements('select', '.optionClass');
  // This will wrap all the elements with a class of "optionClass"
  // with the select element 
  var newElem = document.createElement(`${el}`)
  //newElem.
  
  Array.prototype.forEach.call(document.querySelectorAll(`${wrapper}`), function(c){
    /*newElem.value = value;*/
    newElem.appendChild(c);
  });

  document.body.appendChild(newElem);
}



function highlightWords(paragraph, colours, containerElement, optionArray) {
  const targetElement = document.getElementById(containerElement);
 

  for (let index = 0; index < optionArray.length; index++) {
    const element = optionArray[index];
    
    const createElem = document.createElement("span");
    createElem.className += "newSpanClass";
    createElem.value = createElem.textContent; 
    createElem.textContent = `${element} `;
    targetElement.appendChild(createElem);

  }

  
  for (let index = 0; index < colours.length; index++) {
    //console.log(colours[index]);
    targetElement.innerHTML += `<option value='${colours[index]}' class='optionClass'>${colours[index]}</option>`;
    //targetElement.value = createElem.textContent;
  };

  const spanElement = document.getElementsByClassName("newElemClass");
  wrapMultipleElements('select', '.optionClass');

  
    
    const selectValue = document.getElementsByTagName("select");
    

    for (let index = 0; index < spanElement.length; index++) {
      const element = spanElement[index];
      element.addEventListener("click",function(){
        console.log("clicked");
        console.log(selectValue[0].value);
        element.style.backgroundColor = selectValue[0].value;
      });
    }
    
 
}




const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
