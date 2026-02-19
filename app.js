// function printValue() {
//     var a = 7;
//     console.log(a);

//     function inner(){
//         console.log(a);
//     }

//     inner()
// }

// printValue()

// console.log(a);


// if (true) {
//     var a = 10
//     console.log(a);
// }

// console.log(a);

// console.log(a); // undefined


// var a=10;
// let a=10;
// const a=10;

// Arrays

// let arr1=[1,2,3,4,5,"six","seven","nine"]

// console.log(arr1[4]);
// console.log(arr1.length);

// for(let i=0;i<arr1.length;i++){
//     console.log(arr1[i]);
// }

// console.log(arr1[0]);
// console.log(arr1[1]);
// console.log(arr1[2]);
// console.log(arr1[3]);
// console.log(arr1[4]);
// console.log(arr1[5]);
// console.log(arr1[6]);

// let arr1=[1,2,3,4,5,"six","seven","nine"]
// arr1.push(17)
// arr1.pop()
// arr1.pop()
// arr1.shift()
// arr1.unshift(111)

// console.log(arr1);

// Foreach 

//+5
// 4,8,15...16

// const inner=(val,ind)=>{

// }

// arr1.forEach((val,ind)=>{
//     console.log(val+5);    
// })

//1 ---> val--> 2, ind -->0
//2 ---> val--> 4, ind --> 1
//.
//.
//7 ---> val--> 8, ind--->6

// let a=arr1.forEach((val, ind) => {
//     console.log(ind * 2);
// })

// console.log(a);


// function dummy(){
//     console.log("Hui");
// }

// let a=dummy();
// console.log(a);


// Map 
// let arr1 = [2, 4, 5, 3, 1, 7, 8]

// []

// let ans=arr1.map((num,ind)=>{
//     return num*ind
// })

// console.log(ans);
// console.log(arr1);


// Filter
// let arr1 = [2, 4, 5, 3, 1, 7, 8]
//[]

// let ans=arr1.filter((num,ind)=>{
//     return num<=5
// });

//1 --> (2,0) ---> false
//2 --> (4,1) ---> false
//3 --> (5,2) ---> true

// console.log(ans);




// let arr1 = [2, 4, 5, 3, 1, 7, 8]

// let ans = arr1.reduce((acc, val, ind) => {
//     return acc * val
// }, 1)

// console.log(ans);


//value = 1

//exe1 --> (1,2,0) ---> ret 2
//exe2 --> (2,4,1) ---> ret 6
//exe3 --> (6,5,2) ---> ret 11
//exe4 --> (11,3,3) ---> ret 14
//exe5 --> (14,1,4) ---> ret 15
//exe6 --> (15,7,5) ---> ret 22
//exe7 ---> (22,8,6) --> ret 30  --> acc--> 30


// let arr1=[234,5,234,54]

// console.log(arr1.includes(5));

// if (7+7) {
//     console.log("Step1");
//     console.log("Step2");
//     console.log("Step3");
// }

let arr1=[8,7,6,5,4,3,2,1]

//[]

let result=arr1.filter((num,ind)=>{
    return ind
})

console.log(result);
