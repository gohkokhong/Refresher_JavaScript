// Data is not modified directly - Instead new copies are made
// E.g., React state should be immutable; it compares current state and reference for changes

const notes = ['Meeting Notes', 'Grocery List'];
notes.push('Cooking Steps');        // Mutates the original list
const newNotes = [...notes, 'Workout Plan'];
console.log(notes);
console.log(newNotes);

// Changing "Grocery List" to "Shopping List"
const updatedNotes = notes.map((note) => 
    note === 'Grocery List' ? 'Shopping List' : note
);
console.log(updatedNotes);
console.log(notes);


// Immutability - objects
const user = {
  name: 'John Doe',
  age: 30,
};

const newUser = {
    ...user,        //Copies values of user here
    age: 31,
};

console.log(user);
console.log(newUser);