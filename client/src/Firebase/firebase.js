import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAN9VigARouaAMuiSjzo4kvv7ylaMJ7yiM",
    authDomain: "iqstool.firebaseapp.com",
    databaseURL: "https://iqstool-default-rtdb.firebaseio.com",
    projectId: "iqstool",
    storageBucket: "iqstool.appspot.com",
    messagingSenderId: "734034190613",
    appId: "1:734034190613:web:198994b441d4b58163c91c"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
})

database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 10960,
    createdAt: 958493920
})

/*
database.ref()
.once('value')
.then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
}).catch((e) => {
    console.log('Error fetching data', e);
})
*/
/* database.ref().set({
     name: 'Sam Ip',
     age: 29,
     stressLevel: 6,
     isSingle: true,
     job: {
         title: 'Software Tester',
         company: 'MIIPE'
     },
     location: {
         city: 'Toronto',
         country: 'Canada'
     }
 }).then(() => {
     console.log('Data is saved');
 }).catch((e) => {
     console.log('This failed.', e);
 })

// database.ref().set('This is my data.');

database.ref('age').set(27);
database.ref('location/city').set('Newmarket');
database.ref('attributes').set({
    height: 50,
    weight: 160
})

//database.ref('isSingle')
//.remove()
//.then(() => {
//    console.log('Data is removed');
//}).catch((e) => {
//    console.log('Data was not removed', e);
//})

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
})
*/