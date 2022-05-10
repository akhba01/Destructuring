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
