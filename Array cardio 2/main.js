const people=[
    {name:'wes' , year:1988},
    {name:'Kait' , year:1986},
    {name:'Irv' , year:1970},
    {name:'Lux' , year:2015}
];
const comments =[
    {text:'love this!',id:523423},
    {text:'Super good!',id:823423},
    {text:'you are the best',id:20399842},
    {text:'la live france!',id:123523},
    {text:'chill chill chill!',id:542328}

];
//some or every check in array
const isadult = people.some(person=>{
    const currentyear = (new Date()).getFullYear();
    if(currentyear - person.year>=19){
        return true;
    }
});
console.log(isadult);

const alladult = people.every(person =>{(new Date().getFullYear-person.year>=19)});
console.log(alladult);

//find 
const comment = comments.find(com=>{
    if(com.id===123523){
        return true
    }
})
console.log(comment)

//findIndex
 const index = comments.findIndex(comm=>{
    if(comm.id===823423)
      return true
 });
 console.log(index);
 const newComment =[ 
 ...comments.slice(0,index),
 ...comments.slice(index+1)
 ];
 console.table(newComment);