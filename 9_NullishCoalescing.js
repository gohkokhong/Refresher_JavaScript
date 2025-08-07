// Provides a way to handle default values of null or undefined
// Only offers right-hand operand if left-hand is null or undefined
// Does not return right-hand operand for falsy values like 0, '', false, or NaN.

let value = 0;
let result = value ?? 'Default Value';
let resultOR = value || 'Default Value';

console.log(result);
console.log(resultOR);


// Combining optional chaining and nullish coalescing
const user = {
    name: 'Brad'
};
console.log(user.address?.city ?? 'Unknown');