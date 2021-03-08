
var newvalues = [-10,-0.20,0.30,1,-40,-50]
var foundindex = newvalues.findIndex(foundIndex);
function foundIndex(item){
return item>0;
}
console.log(foundindex);
var numbers = [1,2,3,4,5];
var strings = ['a','b','c','a','d','c','d','a'];
numbers.forEach(newitem) 
function newitem(item,index,array){
    strings.push(item);
}
console.log(numbers.includes(3,-1));
console.log(strings);
const combined = numbers.concat(strings);
console.log(combined);
//concat also works as push 
var faren = [0,32,45,50,75,80,99,120 ];
var celsius = faren.map(toCelsius)
function toCelsius(item){
   return Math.round((item-32)*5/9);
}
console.log(celsius);
var nikitha=[2,6,8,99,27,46,78,3,75,81]
var three = nikitha.filter(threeMultiples)
function threeMultiples(item){
    return ((item%3)== 0);
}
console.log(three);
const employees = [
    {
        name: "nikki",
        age: "21",
        salary: true

    },
    {
        name: "Vijaya",
        age: "23",
        salary: false
    },
    {
        name: "jithya",
        age: "22",
        salary: false
    }
]
const hassalary = employees.some(hasSalary);
const salary = employees.find(hasSalary);
function hasSalary(items){
    return items.salary;
}
console.log(hassalary);
console.log(salary);
const changed = employees.reduce(reducer);
function reducer(acc,item){
    acc[item.name] = {type: item.age};
    return acc;
}
console.log(changed);
var abcnum = [1,2,3,"hello world", 4.12 ,true]
var hello = abcnum.slice(0,3);
var remo = abcnum.splice(2,1);
console.log(hello);
console.log(remo);
console.log(abcnum);
const sorted = [77,56,3,45,22,8,90,88,2,68]
sorted.sort(des);
function des(a,b){
    return b-a;
}
const oddnum = sorted.every(oddNum);
function oddNum(item){
   return (item%2) != 0;
}
console.log(oddnum);
console.log(sorted);
var addvalue = sorted.fill(9,-3,-2);
console.log(addvalue);

var newString = "My name is nikitha";
var a=newString.indexOf("n");
var b=newString.lastIndexOf("n");
console.log(a);
console.log(b);
