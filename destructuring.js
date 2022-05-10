const user = {
  name: "John",
  age: 30,
  country: "USA",
  links: [
    {
      github: "github.com/john",
      facebook: "facebook.com/john",
    },
  ],
};

// conventional way
var name = user.name;
var age = user.age;
var country = user.country;

// destructuring way
var { name: userName = "guest", age, country } = user;
console.log(`${userName} is ${age} years old and lives in ${country}`);
// const { links: { github, facebook } } = user;
// console.log(`${github} and ${facebook}`);

const {
  links: [{ github, facebook }],
} = user;
console.log(github, facebook);

// function greeting(user){
//     return `Hello ${user.name}`;
// }
function greeting({ name }) {
  return `Hello ${name}`;
}

console.log(greeting(user));

// ______________________________________________________________________________
function marker({
  name = "Uknown",
  location: { lat, lng } = {
    lat: 0,
    lng: 0,
  },
}) {
  console.log(`${name} is at ${lat}, ${lng}`);
}

const bogor = {
  name: "Bogor",
  location: {
    lat: -6.5795,
    lng: 106.8294,
  },
};

marker(bogor);
//   ----------------------------------------------------------------------------
const Lang = ["JavaScript", "Python", "Ruby"];
const [js ='', py, rb] = Lang;
console.log(js, py, rb);
// swapping values
let firstName = "John";
let lastName = "Doe";
[firstName, lastName] = [lastName, firstName];
console.log(firstName, lastName);
// destructuring  from function 
function getFruit() {
    return [
        'apple',
        'banana',
        'cherry'
    ]
}
const [fruit1, fruit2, fruit3] = getFruit();
console.log(fruit1, fruit2, fruit3);
const [,b, c] = getFruit();
console.log(b, c);
// rest syntax array destructuring
const LangComp = ['JavaScript', 'Python', 'Ruby', 'Golang', 'Rustlang'];
const [j, ...rest] = LangComp;
console.log(j, rest);
// Nested Array 
const Animal = [ 'dog', 'cat', ['bird', 'fish'] ];
const [, , [bird, animal]] = Animal;
console.log(animal, bird);

// multidimesional array    
const students = [
    {nama : 'John', umur : 20},
    {nama: 'Jane', umur : 21},
]

const [{nama: nama1, umur: umur1}] = students;
console.log(nama1, umur1);

for(const {nama, umur} of students){
    console.log(nama, umur);
}
// ______________________________________________________________________________