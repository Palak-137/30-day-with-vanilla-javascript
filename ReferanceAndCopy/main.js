//reference
var age = 10;
var age2 = age;
console.log(age,age2)
 age2 =30;
console.log(age,age2)

// array copy
var players = ['rohit','mohit','bharat','abhijeet','palak']

//var person = players;
//players[2]='sourav';
//console.log(players);
//console.log(person);
//copying the array instead of reference
//var person = [...players];

//players[2]='sourav';
//console.log(players);
//console.log(person);

//other ways to make copy of array
var person = players.slice();
players[2]='sourav';
console.log(players);
console.log(person);

//objects 

const people = {
    name : 'palak',
    age : '19',
    social:{
        tiwiter: '@palak',
        linkedIn: '@Kumaripalak'
    }
}
const dev = Object.assign({},people);
console.log(dev);

