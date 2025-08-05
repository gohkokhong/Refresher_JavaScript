// The "This" variable references the object that call them
const person = {
    name: 'Brad',
    sayHelloRegular: function(){
        console.log('Regular: ', this.name);
        console.log("The following shows that 'this' refers to the object this function is in.")
        console.log(this);
    },
    sayHelloArrow: () => console.log('Arrow: ', this.name),
    sayObjectArrow: () => console.log(this)
};

person.sayHelloRegular();
console.log("==========");
person.sayHelloArrow();
console.log("The 'this' in an arrow function would refer to whatever is before the function i.e., window");
person.sayObjectArrow();