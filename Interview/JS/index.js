// "use strict"
// const myset = new Set();
// myset.add(1);
// myset.add(3);
// myset.add("Some random text");
// myset.has(3); // true
// myset.size; //3
// myset.delete(3);
// console.log(myset);
// for (const item of myset) {
// console.log(item);
// }
// const myArr = Array.from(myset);
// console.log("myArr:", myArr);
// const mySet2 = new Set([1, 2, 2, 3, 4]);
// console.log(mySet2.size); // 4
// console.log([...mySet2]); // [1, 2, 3, 4]
// console.log(
//   [1, , 3].map((x, index) => {
//     console.log(`Visit ${index}`);
//     return x * 2;
//   })
// );
// localStorage.setItem("yo","sdfas")
// console.log('x:', x)
// x=23

// function fun(a, b, ...theArgs) {
//   console.log("b:", b);
//   console.log("a:", a);
//   console.log("theArgs:", theArgs);
// }
// fun(1, 2, 3, 4, 5, 6);
// (function () {
//   console.log("hey");
// })();
// const x = function y() {
//   console.log("i am a named function expression");
// };
// x();
// let obj = {
//   vikas: function () {
//     console.log("hi vikas");
//   },
// };
// const arr = new Array(10).fill(2);
// new Promise((res, rej) => {
//   if (muj == 2) {
//     return res();
//   } else {
//     return rej();
//   }
// });
// console.log(arr);
// obj.vikas();
// var x = 21;
// var fun = function () {
//   console.log(x);
//   var x = 20;
// };
// fun();

// const Person = function(_name, _title) {
//   const name = _name
//   const title = _title
//   return {
//       details : function() {
//           console.log(`${name} is a ${title}.`)
//       }
//   }
// }
// const person = new Person("Khan", "Web developer")
// person.details()
// const user = {
//   name: "John",
//   printInfo: function () {
//     console.log(`My name is ${this.name}.`);
//   },
// };

// const admin = Object.create(user);

// admin.name = "Nick"; // Remember that "name" is a property set on "admin" but not on "user" object
// console.log("admin:", admin);

// admin.printInfo(); // My name is Nick


