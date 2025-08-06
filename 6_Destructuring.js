const notes = [
    { title: 'Meeting Notes', content: 'Discuss project roadmap'},
    { title: 'Grocery list', content: 'Buy milk, eggs, bread'},
    { title: 'Workout Plan', content: 'Push day: Bench, SHoulder Press'},
    { title: 'Recipe Ideas', content: 'Pasta, Salad, Tacos'},
];

// Spread operator
const [firstNote, secondNote, ...otherNotes] = notes;

console.log(firstNote);
console.log(secondNote);
console.log("Rest operator below...");
console.log(otherNotes);

console.log("=============================");
// Destructing object
const note = {
    title: 'Meeting Notes',
    content: 'Discuss project roadmap',
    isPinned: true,
};

const { title: noteTitle, isPinned } = note;
console.log(noteTitle);

// Nested destructuring
const user = {
    name: 'Ben',
    address: { city: 'Boston', state: 'MA'},
    hobbies: ['Movies', 'Sports', 'Music']
};

const { name, hobbies: [firstHobby, ...otherHobbies] } = user;
console.log(firstHobby);
console.log(otherHobbies);