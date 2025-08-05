// Regular 'if' statement
const number = 2;
let message;

if (number % 2 === 0){
    message = 'Even Number';
} else {
    message = 'Odd number';
}

console.log(message);

// Ternary - Concise way to write an 'if' statement
const messageTernary = number % 2 === 0 ? 'Even Number' : 'Odd Number';
console.log(messageTernary);

// Ternary - Example 2
const note = {
    title: 'Meeting notes',
    content: 'Discuss project roadmap',
    timestamp: Date.now(),
    isPinned: true
}

const noteText = `
    Title: ${note.title}
    Status: ${note.isPinned ? '📌 Pinned Note' : 'Regular Note'}
    Last Edited: ${new Date(note.timestamp).toLocaleString()}
`;

console.log(noteText);