//import { POINT_CONVERSION_COMPRESSED } from "constants";

var person = [
    {first:'Nicolaus',last:'copernius',year:1473,passed:1543},
    {first:'Johannes' , last :'Keleper',year:1571,passed:1630},
    {first:"max",last:'Plank',year:1858,passed:1947}
];
const people =['Beck, Glenn','Becker, Carl','Beckkett, Samuel','Beddoes, Mick',
'Beecher, Henry','Beethoven, Ludwig','Begin, menachem','Belloc, Hilaire','Bellow, Saul',
'Benjamin, Walter','Benn, Tony','Bennington, Chester','Benson, Leana','Bent, Sailas'
];
//Array filter()
//filter who was born in the 1500's
const inventors = person.filter((inventor)=>{
if(inventor.year>1400 &&inventor.year<1600){
    return true;
}
});
console.table(inventors);
//Array map()
//give an array of the inventory first and last name
const names = person.map(name=>name.first +" "+name.last);
console.log(names);
//Array sort()
//sort the peson by birthdate oldest to newest
const sorted = person.sort(function(a,b){
   if(a.year>b.year){
       return 1;
   }
   else{
       return -1;
   }
});
console.log(sorted);
//Array reduce()
//how many total all person lived
const totalage = person.reduce((total,persons)=>{
          return total+(persons.passed - persons.year);
        
},0);
console.table(totalage);
//sort the person by the year they live
const sortedperson = person.sort(function(a,b){
    const lastguy = a.passed - a.year;
    const nextguy = b.passed - b.year;
    if(lastguy>nextguy){
        return 1;
    }else{
        return -1;
    }
});
console.table(sortedperson);
// sort the people alphabetically by last name
const alpha = people.sort(function(lastone , nextone){
 const [alast,afast] = lastone.split(', ');
 const [blast,bfirst] = nextone.split(', ');
 return alast>blast ?1:-1;
});
console.table(alpha);

const data = ['car','car','tuck','bike','walk','car','van','bike','car','truck','van'];
const trans = data.reduce(function(obj,item){
    if(!obj[item]){
        obj[item]=0;
    }obj[item]++;
    return obj;
},{});
console.log(trans);