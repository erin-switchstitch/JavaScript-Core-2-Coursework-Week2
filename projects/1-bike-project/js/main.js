// id=blueBtn
let cl = console.log

function clickButton (buttonColorVariable, target) {

   const colorChangeArray = [
    {
        buttonColor : "blue", 
        "backgroundColor" : [{
                target1 : `#588fbd`,
                target2 : `#ffa500`,
                target3 : `black`,
            }],
        "color" : [{
                target1 : `white`,
        }], 
    },
    {
        buttonColor : "orange", 
        
        "backgroundColor" : [{
                target1 : `#588fbd`,
                target2 : `#ffa500`,
                target3 : `black`,
            }],
            "color" : [{
                target3 : `white`,
            }], 
    },
    {
        buttonColor : "green", 
        
        "backgroundColor" : [{
                target1 : `#588fbd`,
                target2 : `#ffa500`,
                target3 : `black`,
            }],
            "color" : [{
                target3 : `white`,
            }], 
    }
];

    const btnId = document.getElementById(`${buttonColorVariable}Btn`);
    //cl(btnId);
    //cl("selected color : " + buttonColorVariable);
    

    
    const buttonColorArray = [];
    for (let index = 0; index < colorChangeArray.length; index++) {
        buttonColorArray.push(colorChangeArray[index].buttonColor);
    }
    //cl(buttonColorArray);
    let colorIndex = buttonColorArray.indexOf(buttonColorVariable);
    //cl("colorIndex : " + colorIndex)
    const currentArray = colorChangeArray[colorIndex];
    let cssSelectors = Object.keys(colorChangeArray[colorIndex]);
    //cl("cssSelector :" + cssSelectors)
    //cl(currentArray.backgroundColor[0].target1)


    const propertyKeysArray = [];
    const propertyValuesArray = [];

    for (let i=1 ; i < (cssSelectors.length+1) ; i++){
        
        propertyKeysArray.push(Object.keys(colorChangeArray[colorIndex]));
        propertyValuesArray.push(Object.values(colorChangeArray[colorIndex]));
        //cl("propertyKeysArray : " + propertyKeysArray[1]);
        const forEachPropertyKeys = [];
        const forEachPropertyValues = [];

        propertyKeysArray.forEach(function(key,index){
            const forEachProperty = key[index];
            
            //cl("key : " + colorChangeArray[colorIndex][forEachProperty]);

            if ( key[index] != "buttonColor") {
                forEachPropertyKeys.push(Object.keys(colorChangeArray[colorIndex]));
                let toChangeKeys = Object.keys(colorChangeArray[colorIndex][forEachProperty][0])[index];
                let toChangeValues = (Object.values(colorChangeArray[colorIndex][forEachProperty][0])[index]);
                cl((toChangeKeys) + " " + (toChangeValues));
                cl(typeof(toChangeKeys) + " " + typeof(toChangeValues));
                cl("forEachProperty :" + forEachProperty);
                //forEachPropertyValues.push(Object.values(colorChangeArray[colorIndex][forEachProperty]));
                //cl(index);

                // I don't know how to access the 

                let elemTarget = target[0];
                cl(elemTarget)

                [target[0]].style[forEachProperty] = toChangeValues;
                //[`${toChangeKeys}[0]`].style[forEachProperty] = toChangeValues;
                //cl($target1);
            }
            
        })

        //cl(forEachPropertyKeys);
        //cl(forEachPropertyValues);
       

     
    }
    
}


const target1 = document.getElementsByClassName("jumbotron");
const target2 = document.getElementsByClassName("btn btn-primary btn-lrg")[0];
const target3 = document.getElementsByClassName("btn btn-secondary btn-lrg")[0];

clickButton("blue",target1);