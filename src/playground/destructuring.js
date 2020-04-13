//Object Destructuring

// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'philadelphia',
//         temp: 92
//     }
// }

// const {name:flname="lj", age, location} = person;
// console.log(flname)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name:publisherName='Self-Published'} = book.publisher
// console.log(publisherName)


// Array Destructuring

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania','19147'];

// const [, city, state="NewYo", zip] = address;

// console.log(city,state, zip);

const item = ['Coffee (hot)', '$2.00', '$3.50', '$3.75'];

const [itemName,,mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);