// const person = {
//   name: "Nate",
//   age: "15",
//   location: {
//     city: "North Potomac",
//     temp: 61,
//   },
// };

// const { name: firstName = "Anonymous", age } = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`Its's ${temperature} in ${city}.`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };

// const { name: publisherName = "Self Published" } = book.publisher;

// console.log(publisherName);

//Array Destructuring

// const address = ["1299 S Juniper Street", "Potomac", "Maryland", "19147"];

// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city}, ${state}`);

const itemInfo = ["Coffee (iced)", "$2.00", "$2.55", "$2.75"];

const [item, , medPrice] = itemInfo;

console.log(`A medium ${item} costs ${medPrice}`);
