// Object

// let person1={
//     name:"Mahesh Babu",
//     age:47,
//     isMarried:true,
//     printHello:()=>{
//         console.log("Hello");
//     },
//     printHeroName: function (){
//         console.log(this.name);
//     }
// }

// person1.printHello()
// person1.printHeroName()

// person1["age"]=50
// person1.latestMovie="varanasi"
// delete person1.isMarried;

// console.log(person1);


// // console.log(person1.name);
// console.log(person1["name"]);


// let arr = [1, 2, 3, 4, 5, () => { console.log("Heelo") }]
// arr[3]=44
// console.log(arr);

// arr[5]()

// let arr=[
//     1,
//     2,
//     3,
//     4,
//     [
//         "five",
//         "six",
//         "seven",
//         [
//             "eight",
//             "nine"
//         ]
//     ],
// ]

// console.log(arr[4][3][1])

// Dummy person object example
// const person = {
//   firstName: "Jane",
//   lastName: "Doe",
//   age: 28,
//   email: "jane.doe@example.com",
//   address: {
//     street: "123 Main St",
//     city: "Sampleville",
//     state: "CA",
//     zip: "12345"
//   },
//   isActive: true
// };

// console.log(person.address.state);
// console.log(person["address"].state);

let studentMarks = [
    {
        name: "Alice",
        marks: 85
    },
    {
        name: "Bob",
        marks: 45
    },
    {
        name: "Charlie",
        marks: 52
    },
    {
        name: "David",
        marks: 99
    },
    {
        name: "Eve",
        marks: 88
    }
]

// [{name:"Alice", satus:"Pass"}, {name:"Bob", satus:"Fail"}, {name:"Charlie", satus:"Pass"}, {name:"David", satus:"Fail"}, {name:"Eve", satus:"Pass"}]

//[1,1,1,1,1]

let ans=studentMarks.map((val,ind)=>{
    let isPassed="pass"
    if(val.marks<50){
        isPassed="Fail"
    }

    return {
        name: val.name,
        status:isPassed
    }
})

// 1 ---> val ={name: "Alice",marks: 85}, ind=0
// 2 ---> val ={name: "Bob",marks: 45}, ind=1
// 3 ---> val ={name: "Charlie",marks: 52}, ind=2
// 4 ---> val ={name: "David",marks: 8}, ind=3
// 5 ---> val ={name: "Eve",marks: 88}, ind=4

console.log(ans);
