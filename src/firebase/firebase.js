import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGEING_SENDER_ID,
    appId: "1:900175000452:web:28554352da234f5d6ea3d1",
    measurementId: "G-KCCLHZPTZ4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default};

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// })

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot)=>{
//         const expenses = [];
//         snapshot.forEach((childSnapshot)=>{
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         })
//         console.log(expenses);
// });

// database.ref('expenses')
//     .on('value',(snapshot)=>{
//         const expenses = [];
//         snapshot.forEach((childSnapshot)=>{
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         })
//         console.log(expenses);
// },(e)=>{
//     console.log('An error occured: ', e);
// })





 

// database.ref('expenses').push({
//     description: 'book',
//     note:'a brandnew book',
//     amount: 100,
//     createdAt: 0
// })




// database.ref('notes/-M5_01lH4a5yecBPby5x').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });

// const firebaseNote = {
//     notes: {
//         'first':{
//             title: 'First Note!',
//             body: 'This is my note'
//         },
//         'second':{
//             title: 'Another note',
//             body: 'This is my note'
//         }
//     }
// };


// database.ref('notes').set(firebaseNote);

// const onValueChange = database.ref().on('value', (snapshot)=>{
//     console.log(snapshot.val())
// }, (e)=>{
//     console.log('Error with data fetching.', e);
// });

// database.ref().on('value', (snapshot)=>{
//     const name = snapshot.val().name;
//     const job = snapshot.val().job;
//     console.log(`${name} is a ${job.title} at ${job.company}.`);
// }, (e)=>{
//     console.log('Error with data fetching.', e);
// });

// setTimeout(()=>{
//     database.ref('age').set(29);
// },3500);

// setTimeout(()=>{
//     database.ref().off('value',onValueChange);
// },7000);

// setTimeout(()=>{
//     database.ref('age').set(30);
// },10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot)=>{
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e)=>{
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Jiehao Liu',
//     stressLevel: 6,
//     age: 26,
//     job:{
//         title:'Software Developer',
//         company:'Google'
//     },
//     location: {
//         city: 'Toronto',
//         country: 'Canada'
//     }
// }).then(()=>{
//     console.log('Data is saved!');
// }).catch((e)=>{
//     console.log('This failed.', e);
// });
 
// database.ref().update({
//     stressLevel: 9,
//     'job/company':'Amazon',
//     'location/city':'Seattle'
// });

// database.ref().remove().then(()=>{
//     console.log('Data removed successfully!');
// }).catch((e)=>{
//     console.log('Did not remove data',e);
// });
