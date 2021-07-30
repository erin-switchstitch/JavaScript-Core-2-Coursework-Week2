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



function highlightWords(paragraph, colours) {
  const targetElement = document.getElementById('content');
  let paragraphSplit = paragraph.split(" ")
  
  

  for (let index = 0; index < paragraphSplit.length; index++) {
    const element = paragraphSplit[index];
    targetElement.innerHTML += `<span class=spanClass>${element} </span>`;
    
    const spanElement = document.getElementsByClassName("spanClass");

    spanElement[index].addEventListener("click",function(){
     console.log("clicked");
     console.log(spanElement[index])
    });

    spanElement[index].style.color = "red";
    // const spanElement = document.getElementsByTagName("span")[index];
    // console.log(typeof(spanElement));
    // spanElement.addEventListener("click",()=>{
    //   console.log("clicked");
    //});

    //const spanElement = document.querySelectorAll(".spanClass");
    //console.log(typeof(spanElement[index]))
    //console.log(Array.from(spanElement));
    
    //console.log(spanElement[index]);
   


    const testElement = document.querySelector("#test");
    console.log(typeof(testElement))
    //console.log(console.log(testElement)[index]);

    testElement.addEventListener("click",()=>{
     console.log("clicked");
     console.log(testElement)
    });
 
  }


  
  for (let index = 0; index < colours.length; index++) {
    //console.log(colours[index]);
    targetElement.innerHTML += `<option value='optionNum${index}' class='optionClass' alt='${colours[index]}'>${colours[index]}</option>`;
  
  };

  wrapMultipleElements('select', '.optionClass');
 
}




const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
