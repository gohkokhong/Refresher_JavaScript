// Promise is an object that represents the final result of an asynchronous operation
// E.g., fetching data from an API
// State 1: Pending
// State 2: Fulfilled
// State 3: Rejected

// Example of creating a Promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise Rejected')
    }, 2000)
});

// Using the created Promise
myPromise.then((data) => { 
    console.log(data);
 }).catch((error) => { 
    console.log(error);
 })

//  Example with Fetch API
fetch('https://jsonplaceholder.typicode.com/posts/1')   // Returns a promise
 .then((response) => response.json())    // Retrieve the json data instead of everything
 .then((data) => console.log(data))
 .catch((error) => console.log(error));


//  Async-Await instead of Fetch
// It has to be inside a function that is asynchronous

const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

fetchData();
