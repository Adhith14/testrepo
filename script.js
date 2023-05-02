// let a=10;
// let b=250;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// let car={
//     model:"benz",
//     color:"red",
//     price:100
// }

// console.log(car);
// console.log(car.color);
// console.log(`my car is ${car.color} ${car.model}`);

// let person={
//     name:"adhith",
//     collge:"cce",
//     class:"cs",
//     address:{
//         housename:"xyz",
//         street:"qwerty"
//     }
// }
// console.log(person);

// let f=["apple","mango","orange"]
// console.log(f)
// f.shift("aaaa");
// console.log(f)
// f.pop()
// console.log(f);

// let a=[
//     {
//         id:1,
//         name:"aaa"
//     },
//     {
//         id:2,
//         name:"bbb"
//     },
//     {
//         id:3,
//         name:"ccc"
//     },
//     {
//         id:4,
//         name:"ddd"
//     }
// ];
// console.log(a[1].id)
//  function add(a,b){
//     console.log(a+b);
//  }
// add = (a,b) => {console.log(a+b)}
// add(1,62);

// add = (a, b) => {
//     if (a + b > 10)
//         console.log("number greater than 10")

//     else
//         console.log("not greater")
// }
// add(2, 1)


// print=(a)=>{
// for(var i=0;i<n.length;i++){
//     console.log(n[i]);
// }
// }
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// print(n)

// print2=(a)=>{
//     i=0
//     while(i<a.length){
//         console.log(a[i]);
//         i++;
//     }
// }
// print2(n)

print3 = (a) => {
    i = 0;
    do {
        console.log(n[i]);
        i++;
    } while (i < a.length);
}
print3(n);