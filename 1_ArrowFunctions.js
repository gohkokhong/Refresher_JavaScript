// Regular function
function getRectangleArea(width, height){
    return width * height;
}
console.log(getRectangleArea(5, 10));

// Arrow function
const getRectangleAreaArrow = (width, height) => width * height;
console.log(getRectangleAreaArrow(2, 10));

// Arrow function - Example 2
const sayHello = () => console.log("Hello");
sayHello();

// Arrow function callback
const numbers = [1, 2, 3, 4, 5];
const double = numbers.map((number) => number * 2);
console.log(double);

// Arrow functions cannot be accessed before it's initialised
regular();

function regular(){
    console.log('Regular');
}

const arrow = () => console.log('Arrow');
arrow();