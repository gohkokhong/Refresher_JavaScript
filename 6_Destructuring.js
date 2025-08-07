// Rest Operator
const notes = [
  { title: 'Meeting Notes', content: 'Discuss project roadmap' },
  { title: 'Grocery List', content: 'Buy milk, eggs, bread' },
  { title: 'Workout Plan', content: 'Push day: Bench, Shoulder Press' },
  { title: 'Recipe Ideas', content: 'Pasta, Salad, Tacos' },
];

const [firstNote, secondNote, ...otherNotes] = notes;

console.log(firstNote);
console.log(secondNote);
console.log(secondNote.title);
console.log(otherNotes);

// Destructuring Objects
const note = {
  title: 'Meeting Notes',
  content: 'Discuss project roadmap',
  isPinned: true,
};

const { title, isPinned: flag } = note;
console.log(title);
console.log(flag);

// Nested destructuring
const user = {
  name: 'Ben',
  address: { city: 'Boston', state: 'MA' },
  hobbies: ['Movies', 'Sports', 'Music'],
};

const { name, address: { city, state }, hobbies: [firstHobby, ...otherHobbies] } = user;
console.log(city, state);
console.log(firstHobby);
console.log(otherHobbies);