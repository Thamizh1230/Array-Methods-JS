//reduce-method-------it aggrecate prevalue plus current value of an array
let a=[2,3,4,5,6,7];
let b= a.reduce((pre,cur)=>pre+cur,2);
console.log(b);

//map-method------create newarray with same length
let c=[0,1,2,3,4,5,6];
let d=c.map((items)=>items+2);
console.log(d);

//filter-------filter array but differ from current arraylength

let e=[10,20,"hello",40,50,"every","to"];
let f = e.filter((data)=>data>3);
console.log(f);

//foreach-----iterate array without return any new array value
let g=["a","b","c","d","e"];
let h = g.forEach((info)=>console.log(info));

//some------return boolean value if atleast any one of array value can satisfied the given condition 
let i=[100,200,300,400,500];
const j= i.some((datas)=>datas>100);
console.log(j);

//every--------return boolean value each element in array should satisfied given conditon

let k=[12,12,14,18];
let l=k.every((elm)=>elm%2!=0);
console.log(l);

//find-------return first elemnt in the array that satisfied given test, if no values satisfied condition returns undefined
const m=[21,22,23,24,25];
let n=m.find((element)=>element>20);
console.log(n)

//include-------find whether an array includes in given values and return boolean values
let o=["apple","ball","cat","cow"];
let p=o.includes("lion");
console.log(p);

//shift-------remove frsrt element from an array
const q=[31,32,33,34,35];
const r=q.shift();
console.log(q);

//unshift-------add one or more element to beginig of an array
const s=[31,32,33,34,35];
const t=s.unshift(0,1);
console.log(s);

//tostring---returns a string representing the specified array and its elements.
let u=[41,"a","b",42];
let v=u.toString();
console.log(v);

//sort------sort element from array in ascending order
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

let w=[{
    id:55,
    name:"thamizh",
    deg:"BE",
},
{
    id:52,
    name:"vani",
    deg:"Msc",
},
{
    id:51,
    name:"Pooja",
    deg:"Mcom",
}]
let x=w.sort((item1, item2)=>item1.id-item2.id); //let x=w.sort((item1, item2)=>item2.id-item1.id);
console.log(x)

//splice------change content of array by removig or replace existing elemet or add new element

let word=["peacock","crow","parrot","dove"];
word.splice(1, 1, "cat");  //word.splice(3,0, "dog");
console.log(word);

//slice---- returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) 
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2,4));

//push-----add 1 or more ele from end of array
const insects = ['ant', 'bison', 'camel', 'duck', 'elephant'];
insects.push('chickens', 'cats', 'dogs');
console.log(insects);

//pop---remove last elem from an array
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());

//join-----creates and returns a new string by concatenating all of the elements in an array
const nature = ['Fire', 'Air', 'Water'];
// console.log(nature.join());
// console.log(nature.join(""));
console.log(nature.join("-"));


