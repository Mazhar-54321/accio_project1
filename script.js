/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
 arr.filter((el)=>el.profession==="developer").map((el)=>{
    console.log(`id:${el.id},Name:${el.name},Age:${el.age},Profession:${el.profession}`)
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((el)=>{
    if(el.profession === "developer"){
      console.log(`id:${el.id},Name:${el.name},Age:${el.age},Profession:${el.profession}`)
    }
  })
}

function addData() {
  let obj={id:4, name:"susan", age:"20", profession:"intern"} 
  arr.push(obj);
  arr.map((el)=>{
    console.log(`id:${el.id},Name:${el.name},Age:${el.age},Profession:${el.profession}`)
  })
  //Write your code here, just console.log
}

function removeAdmin() {
  arr =arr.filter((el)=>el.profession!=="admin")
  arr.map((el)=>{
    console.log(`id:${el.id},Name:${el.name},Age:${el.age},Profession:${el.profession}`)
  })
  //Write your code here, just console.log
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
    { id: 4, name: "john", age: "18", profession: "developer" },
    { id: 5, name: "jack", age: "20", profession: "developer" },
    { id: 6, name: "karen", age: "19", profession: "admin" },
  ];
  arr=arr.concat(arr1);
  arr.map((el)=>{
    console.log(`id:${el.id},Name:${el.name},Age:${el.age},Profession:${el.profession}`)
  })
}
