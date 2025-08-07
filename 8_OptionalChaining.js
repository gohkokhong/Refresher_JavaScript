// Operator to safely access nested properties of an object w/o having to check if these properties exist
// Returns undefined instead of throwing an error

const user = {
  name: 'John',
  // address is missing
};

console.log(user.address?.city);