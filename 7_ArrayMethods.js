const notes = [
  { title: 'Meeting Notes', content: 'Discuss project roadmap', isPinned: true },
  { title: 'Grocery List', content: 'Buy milk, eggs, bread', isPinned: false },
  { title: 'Workout Plan', content: 'Push day: Bench, Shoulder Press', isPinned: true },
  { title: 'Recipe Ideas', content: 'Pasta, Salad, Tacos', isPinned: false },
];

// Map - Returns a new list by iterating through a list
const noteTitles = notes.map((note, index) => `${index}. ${note.title}`);
console.log(noteTitles);

// Filter - Returns a new list by iterating through a list using, a condition
const pinnedNotes = notes
    .filter((note) => note.isPinned)
    .map((note) => note.title);
console.log(pinnedNotes);

// Reduce - Iterates through an array left to right, applying a function that combines each element with an accumulator to produce a single value
// Most common use would be for concatenating strings or adding numbers
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum);

// Reduce - Example 2
const totalCharacters = notes.reduce((total, note) => total + note.content.length, 0);
console.log(totalCharacters);

// Foreach - Perform an action on each element but does not return a new array
notes.forEach((note) => console.log(note.title));