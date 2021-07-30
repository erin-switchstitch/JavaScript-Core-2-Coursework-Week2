let cl = console.log

const colorChangeArray = [
    {
        buttonColor : "blue", 
        "backgroundColor" : [
                {target1 : `#72befb`},
                {target2 : `#234e72`},
                {target3 : `blue`},
            ],
        "color" : [
                {target1 : `white`},
        ], 
    },
    {
        buttonColor : "orange", 
        "backgroundColor" : [
                {target1 : `#533e18`},
                {target2 : `#ffa500`},
                {target3 : `orange`},
            ],
        "color" : [
                {target1 : `white`},
        ], 
    },
    {
        buttonColor : "green", 
        "backgroundColor" : [
                {target1 : `#2c9b4d`},
                {target2 : `#245834`},
                {target3 : `green`},
            ],
        "color" : [
                {target1 : `white`},
        ], 
    },
];
// cl(colorChangeArray);
// cl(colorChangeArray[0]);
// cl(colorChangeArray[0].buttonColor);



function clickButton (buttonColorVariable, targetArrayInput) {
    const btnId = document.getElementById(`${buttonColorVariable}Btn`);
        //cl("selected color : " + buttonColorVariable);

    const buttonColorArray = [];
    for (let index = 0; index < colorChangeArray.length; index++) {
        buttonColorArray.push(colorChangeArray[index].buttonColor);
    }
    //cl(buttonColorArray);
    //cl(buttonColorArray.indexOf(buttonColorVariable));
    let colorIndex = buttonColorArray.indexOf(buttonColorVariable);
    const currentMainArray = colorChangeArray[colorIndex];
    //cl(currentMainArray);
    //cl(currentMainArray.backgroundColor[0]);

    let cssSelectors = Object.keys(colorChangeArray[colorIndex]);
    //cl("cssSelector :" + cssSelectors)


    for (let i=1 ; i < (cssSelectors.length) ; i++){
        const propertyKeysArray = [];
        const propertyValuesArray = [];

        //cl(cssSelectors);
        //cl(cssSelectors[i]);
        const newSelector = cssSelectors[i];
        
        // cl(currentMainArray[newSelector]);

        for (let index = 0 ; index < currentMainArray[newSelector].length ; index++ ){
            propertyKeysArray.push(Object.keys(currentMainArray[newSelector][index]))
            propertyValuesArray.push(Object.values(currentMainArray[newSelector][index]))
            //cl(propertyKeysArray)
            //cl(propertyValuesArray)
            
            for (let j=0 ; j < propertyKeysArray.length ; j++ ){
                //cl(propertyKeysArray);
                const propertyKeysArrayIndex = propertyKeysArray[j][0];
                    //cl("Current Target : " + propertyKeysArrayIndex);
                const propertyValuesArrayIndex = propertyValuesArray[j][0];
                    //cl("CSS New Selector: " + newSelector);
                    //cl("CSS New Value  : " + propertyValuesArrayIndex);
                const targetNumArray = ["target1","target2","target3"]
                const numToTarget = targetNumArray.indexOf(propertyKeysArrayIndex);
                const currentTargetElement = targetArrayInput[numToTarget];
                    //cl(currentTargetElement);
                currentTargetElement.style[newSelector] = `${propertyValuesArrayIndex}`;
            }
        }
    }
}

const target1 = document.getElementsByClassName("jumbotron")[0];
const target2 = document.getElementsByClassName("btn btn-primary btn-lrg")[0];
const target3 = document.getElementsByClassName("btn btn-secondary btn-lrg")[0];
const targetArray = [target1, target2, target3];

const colorButtonArray = document.getElementsByClassName("colorButton");
for (let index = 0; index < colorButtonArray.length; index++) {
    const element = colorButtonArray[index];

    element.addEventListener("click",function(){
        const rawColor = element.innerHTML
        const outputColor = rawColor.toLowerCase();
        cl(outputColor);
        clickButton(outputColor,targetArray);
    })
}


//need to create a function that inputs the color based on which element is clicked on. Could also use refactoring the 
//code around targets 