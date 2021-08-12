var cl = console.log

function calculate(str) {
  
  var splitString = str.split("");
  cl(splitString.length);
  
  const numbersArray = [];
  
  for (let i=0 ; i<splitString.length; i++){
    cl(splitString[i]);
    
    if (Number(splitString[i]) === NaN) {
      numbersArray.push((splitString[i]));
      
        /*if(Number(splitString[i+1]) != NaN){
          //cl(Number(splitString[i+1]))
      }*/
      
    
  }
  cl(numbersArray)
  //return str;
}}

calculate("1plus2plus3plus4");