// If "falsey" on the left, the remaining would not be ran
console.log(false && 'Hello');
console.log(null && 'Hello');
console.log(true && 'Hello');
console.log('Hello1' && 'Hello');   //First condition is not falsey

// Examples
const isLoggedIn = false;

function showWelcomeShortCircuit(){
    return isLoggedIn && 'Welcome, User';
}

function showWelcomeTernary(){
    return isLoggedIn ? 'Welcome, User' : '';
}

console.log("\n=======");
console.log(showWelcomeShortCircuit());
console.log(showWelcomeTernary());