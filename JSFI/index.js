// what is react ?
// react is an opensource software made by faceboook and it is essentially an UI library or we can say a JS library to build ui interfaces
// which means it helps you making websites
// made by jordan walke
// it was initially used in notification feacture in facebook
// it was made public in 2014
// it comes with jsx which allows you to write components or basically UI components inside the component
// it helps making websites so it basically help users to make components based artitecture and basically keeps all the logic and everithing or it basically encapsulates everything within the component
// react is used in react native it also used in next js which is used for server side rendering
// virtual dom--> it is a key factor it helps improving the performance it basically creates in memory representation of the actual DOM so it is actually kept in memory and it gets updated after that only the real dom gets updated
// so we dont directly mutate the real DOM so what happens is if you keep updating the real dom every now and than it is an expnesive think=g and it actually takes time to update and ultimately makes the application slow so here react actually cerates a copy of the actual dom and decides hey something need to update here so the logic part is done by the react so after everything is done it finally updates the real DOM it is also known as react fiber
// so how to use it is you can use CRA and Vite thses actually uses two libraries first is react and second is reactDOM if you dont want to use any library than you need to install some bundlers for example webpack , babel etc babel is for jsx why bcz jsx is not a valid javascipt syntax it neeeds to be transpilled back to valid that js can undestand and that will work

// what is the diffence between state and props?
// so state is for example is a current state or the current situatioon of a particular object for example a bike fuel , km covered the dashboard in the bike it actually telling us the current state or the current situation so state can define the current state of the component or the application as such s
// so state management react gives us a hook called usestate const [state,setstate]=useState() hsere the setstae is dispatcher/updatder so anything that needs to get updated needs to go through the dispatcher function and the current state should not be mutated
// what are prop so react provides you the feacture of cerating you oun custom component because of its declarative nature so you can end up writing <Button label="hello"/> so here you are giving the button can be passed as a property  both are essentially you can catch the property for example function Button(props){console.log(props)} props are readonly so if you pass the state down to the child than it will act like a prop so here label becomes the property and in this case count pass down as a property

// DIFF BETWEEN NULL AND UNDEFINED
// var x=null
// // console.log(x);
// console.log(undefined==null);
// console.log(undefined===null);

// ARITHMATIC OPERATORS
// comparision,logical,conditional
// console.log(3 + 4 * 5);

// 20+3
// console.log(4 * 3 ** 2);
// 9*4
// console.log((a = b = 5));
// precedence
// data&&globaldata&&predencedata
// console.log((5 && 2 && 0) || (2 && 3) || (15 && 21));
// 0 || false || 21
// console.log((5 && 2 && 0) || 2 == 3 || (15 && 21));

// FUNCTIONS
// function subham(arg1, arg2, arg3, arg4) {
//   console.log(arguments);
// }
// subham(1, 2, 3, 10);

// SCOPES
// global scope , local scope and block scope
// var x = 100;
// function name() {
//   console.log(y);
//   let y = 100;
//   //   let ,const
// }
// name();
// console.log(y);
// block {}
// let can be reassigned but not re declared
// var you can do reassignment as well as redeclartation
// var x = 10;
// var x = 20;
// x = 80;
// let x = 10;
// x = 20;
// let x=100
// in const you cant redeclare as well as you cannot re assign
// const x = 10;
// x = 100;
// console.log(x);
// function text() {
//   console.log(x);
//   let x = 0;
// }
// text();
// temporal dead zone

//OBJECTS
// let obj = {
//   key1: "huru",
//   key2: "jujutsu",
// };
// console.log(obj);
// let x = Object.assign({ key1: "huru", key2: "jujutsu" });
// console.log(x);
// let y = Object.entries({ key1: "huru", key2: "jujutsu" });
// console.log(y);
// for (let [keys, values] of y) {
//   console.log(keys, values);
// }

// let x = "huru";
// let y = "jujutsu";
// let obj = {
//   x,
//   y,
// };
// console.log(obj);
// let obj = { key1: "huru", key2: "jujutsu" };
// for (let keys in obj) {
//   console.log(keys, obj[keys]);
// }

// ARRAY
// newArray()
// concat
// every
// fill

// toString
// filter
// map
// reduce
// forEach
// id value
// typeof obj arr
// st
// let arr = [1, 3, 3, 4];
// let arr2 = [5, 6, 7, 8, 9];
// console.log(arr.concat(arr2));
// console.log([...arr, ...arr2]);
// console.log(arr2.every((el) => el > 1));
// console.log(arr2.fill(1));
// let y = arr2.filter((el, i) => el > 7);
// console.log("y:", y);
// let x = arr2.map((el, i) => el ** 2);
// console.log("x:", x);
// let sum = 0;
// for (let i = 0; i < arr2.length; i++) {
//   sum = sum + arr2[i];
// }
// console.log(sum);
// let y = arr2.reduce((sum, el) => sum + el);
// console.log("y:", y);
// let x = arr2.forEach((el, i) => console.log(el));
// console.log("x:", x);
// let obj = {
//   chips: "kurkure",
// };
// console.log(typeof arr2 === typeof obj);

// PROMISES
// const prom = (time) =>
//   new Promise((resolved, rejected) => {
//     time < 1000
//       ? rejected()
//       : setTimeout(() => {
//           resolved();
//         }, time);
//   });
// let res = prom(900);
// res
//   .then((res) => console.log("fulfilled"))
//   .catch((err) => console.log("not fulfilled"));

//   const guh=async()=>{
//     try{
//         let res=prom(2000)

//         console.log(res);
//     }
//     catch(err){
//         console.log("not fulfilled");
//     }
//   }

//   guh().then((res)=>console.log("fulfilled")).catch((err)=>console.log("not"))

// let prom1=prom(2000).then((res)=>console.log("filfilled1"))
// let prom2=prom(2100).then((res)=>console.log("prom2"))
// Promise.all([prom1,prom2]).then((res)=>console.log("all promises are resolved"))

// const prom = (time) =>
//   new Promise((ressolve, reject) => {
//     time < 1000
//       ? reject()
//       : setTimeout(() => {
//           ressolve({ status: 200 });
//         }, time);
//   });
// // prom(900)
// //   .then((result) => console.log("promise resolved"))
// //   .catch((err) => console.log("promise not resolved"));
// const asyprom = async () => {
//   try {
//     let res = await prom(1400);
//     console.log("resolved");
//   } catch (err) {
//     console.log("below the limit ");
//   }
// };

// asyprom();

// function Person(name, energy) {
//   this.name = name;
//   this.energy = energy;
// }
// Person.prototype.eat = function (amnt) {
//   console.log(this.name, "is eating");
//   this.energy += amnt;
// };
// Person.prototype.sleep = function (time) {
//   console.log(this.name, "is sleeping");
//   this.energy += time;
// };
// let sai = new Person("sai", 12);
// let jay = new Person("jay", 12);
// console.log(sai.energy);
// console.log(sai);
// sai.sleep(200);
// jay.eat(3);

// let parent ={
//     name:"parent",
//     age:40,
//     country:"india"
// }
// let child=Object.create(parent)

// 1st
// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 1000);
// console.log("3");

// // 2nd
// console.log("1");
// setTimeout(() => {
//   console.log("2");
// }, 0);
// console.log("3");

//CALLBACK
// teacher who has gave the homwwork
// kid that is actually
// kid 1 and kid 2
// kid 1 actually does the hw
// kid 2 copies the hw
// const dohw = (fun) => {
//   console.log("i am done doing");
//   fun();
// };
// const copyhw = () => {
//   console.log("copying");
// };
// dohw(copyhw);
// copyhw()
// callback comes in
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// CLIENT SERVER MODEL
// message over the internet to another device and the other device recieving the message will respond back the information and all the computers are doing this
// the message can be anything can be webpages , files , email or anything as such so when you send some thing you need a post service you are sending a apackage so that package needs to have some onformation about the message like you need a stamp or you need a address you need a weight of the package as well to adree or a from address
// so similar to that computer uses a protocol called IP or it is called as internet protocol
// there are a bunch of protocols http,tcp and IP
// tcp/ip --> we are sending the package of data so for example when computer sends some data to another computer now you can send the data in chunks and these chunks are called packet of data so one packet will have some information like header and some data on it so the header will have some information abut the data we are sending for example
// header will have information about how long the data might be and how to read the data that is being sent and what all the informations needed for the data or the packet
// these are generally small packets but when time has evolved and intenet has evloved these packets are tend to be very small so IP is actually not enough or a reliable system for example if a sigle packet gets corruputed than it will be hard to send the whole data so we need to manage this
// here it comes the use of TCP it actually acts like a layer build on top of IP (tranmission control protocol )
// it is basically a standard that defines how to establish a particular network conversation through which two devices can exchange data so TCP works with this IP protocol
// ip determines how to send the packets of data to each other TCP establishes how to maintain a network connection over here
// stages --> whenevr a computer sends a some information it requests for some acknowledgement it will check if is possible to communicate to to this person or not
// now user-->(gives syn packet to server) device the user requests for some synchronization packet (SYN packet) now this will check if the device is available for communication or not
// server (acknowledge it )--> they respond to the client now the client will know that okay so this connection can be established and now the clinet responds back with an acknowldge pack and than connetion establiches
// how a computer finds the other computer in the network also --> IP address so every computer has an IP address you have a unique adress IP addresses are generally set of numbers seperated by 4 dots so it have 0 to 255 in each so it could be a set of characters from 0 to 255 255*4 so you would realize 255 is 8 ones which means 8bits *4 = 32its so you will have 3 to 4 billion devices by combination
// but as time passed we needed a upgraed version the IPV4 now we have IPV6 which will give us much more possibiliteis there can be devices in IPV4 or IPV6 as well
// not computer can recive any type of information it can be html, it can be file or anything so how does the computers understands the type of the message recieved of sent as such so for this the computer has port so lets say you need to send a file so the port number of 21 to it a port is where you can access a computer so forexample if its an email you have the port number os 25 there is also a port for HTTP ist is generally 80 now generally the computer has 65500 ports avaiable to its system we dont generally use all of this
// so yu can say that IP address is like a building and the ports are the floors so each floor has a different port number
// for example 192.168.0.2 if this the IP the port will be 21 so you have the IP address alzong with the port number along with it
// we have never written any address like this in the internet we usually write something like amazon or google.com an we still get our website so what happens
// is lets  say there is a website like google  it has some information which is stored somewhere
// so whever you type the IP address you will end up to the real website
// in order to solve this we have DNS (domain named system ) and it actually maps amazon to this IP address similarly in google it maps an IP address
// so forexample godaddy has a DNS server which has some information about the wewbsite and the IP address associated with it because itsnot possible to remember the IP address
// so when you type the url lets say google it will basically request the DNS and it will try to connect to this server so than we get the IP address
// DNS is a database you can say s
// every url on the internet has an IP address associated to it
// TLS handshake is whre two devices are making a handshake and saying that we are connected as such
// but it still upto the user of what kind of data to send or how to send it
//so around when the TCP became a standard one more standard which came around was that http (hyper text transfer protocol)
// http is an abstract layer built on top of TCP so basically is wraps the TCP by making a layer on top of it and reduces the complexity as such so mobile camera is known to us we dont need to know about how the camera is working
// so over the internet you will usually see http protocol it is the 1.1 version
// http tries to solve is to figure out what is inside this envelop and what that content is and than depending on that do some task is it an html inside it or is it a json or is it a file as such
// so it actually tries to simplyfy the process to making a response and request as such
// when you try to make an http request you try to access a few headers whaich are being send generally you try to mention (GET/http/1.1/www.example.com)is it a GET ,POST, or anthing http and 1.1 is the version of http the host can be www.example.com the response is like http/1.1 200(status code ok) Content-Type:text/html so http is basically trying to make a standard for the req and the response as such now
// status codes wikipedia
// 200--> OK , 201--> created 202--> accepted, 404--> Not found , 405--> method not allowed , 408--> request timed out 500--> internal server error , 503--> service unavailable
// server --> a computer program or a device that serves can be considerd as a server
// a server can serve many clients
// client --> all the devices mobile,computer ,tablet,a browser
// browser sends an http request to the web server now the server can handle the request and send back the response
// CMD
// curl(you are trying to get some information from the internet ) `curl google.com` (moved permanantly)
//  `curl -I google.com` (you will get the headers in the response)
//  moved permenantly -->so what it actually means is lot of the protocols or the websites work on a secure network so what they try to do is that they redirect you would see that it becomes https
// `curl -I http://google.com/` we get the 200 response
// `curl http://google.com/` (you will get the whole html page of google)
// in BROWSER the inspect
// type google.com see the headers --> request headers
// go to incognito and type google.com and than open the netwrk and google.com and you will see the status 301
// at the end it goes to the https and redirects
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// EVENT LOOP
// web apiS= settimeout , DOM,fetch,LS,console,location through window.
// promises -->micro
// console.log("1");
// setTimeout(() => {
//   console.log("inside the ST");
// }, 1000);

// console.log("2");
// differentiating factor a filter
// setTimeout(() => {
//   console.log("inside settimeout ");
// }, 0);
// Promise.resolve()

//   .then((res) => console.log("resolved"))
//   .catch((err) => console.log(err));
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// CLOSURES
// debouncing and throttling
// its  a meachanism in which js maintains a scope of some variables in the closure scope if the particular variable goes out of scope
// function outer() {
//   let value = 5;
//   return function inner(b) {
//     return value + b;
//   };
// }
// // let out = outer()(10);

// console.log(outer()(10));

// function calcu(initval = 0) {
//   let value = initval;
//   function add(val) {
//     value = value + val;
//     return value;

//   };
//   return {add}
// }
// let calc = calcu();
// // console.log(calc.add);

// console.log(calc.add(10));
// console.log(calc.add(20));
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ES6+ JSFI 11
// spread op
// newname to the key
// let obj = {
//   naam: "subham",
//   kaksha: "4th",
// };
// function check() {
//   return obj;
// }
// let name = obj.naam;
// console.log("name:", name);
// let clas = obj.kaksha;
// console.log("clas:", clas);
// let { naam: naamkaran, kaksha } = check();
// console.log("naamkaran:", naamkaran);
// console.log("kaksha:", kaksha);
// console.log("naam:", naam);
// let arr = [1, 2, 3];
// let firstval = arr[0];
// console.log("firstval:", firstval);
// let secondval = arr[1];
// console.log("secondval:", secondval);
// let [firstval, second] = arr;
// console.log("second:", second);
// console.log("firstval:", firstval);
// function Rfetch({ naam, kaksha }) {
//   console.log(naam, kaksha);
// }
// Rfetch(obj);
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// URL
// uniform resource locator
// protocol
// DNS
// https://www.reqres.in/api/login
// --Host// subdomain
// third
// SLD
// TLD
// port
// path
// query,variable =value ,and operator
// fragment
// absolute and relative address
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// FUNCTION CURRYING
// const first = (x) => {
//       return second = (y) => {
//             return x * y
//       }
// }
// const sum = (a) => {
//       return (b) => {
//             return (c) => {
//                   return a + b + c
//             }
//       }
// }
// let val = first(10)(4)
// console.log('val:', val)
// const secondval = sum(1)(1)(1)
// console.log('secondval:', secondval)
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// GETTERS AND SETTERS
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1);

// }
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1);

// }
//////////////////////////////////////// ARROW FUNCTIONS AND NORMAL FUNCTIONS IN object
// let obj = {
//     radius: 2,
//     area() {
//         return this
//     },
//     perimeter: () => this

// }
// console.log(obj.area());
// console.log(obj.perimeter());
////////////////////////////////////// DIFFERENCE BETWEEN THE DOT AND SQUARE BRACKET NOTATION IN OBJECTS
// const bird = {
//     size: "small"
// }
// const animal = {
//     name: "dsd",
//     small: true

// }
// // console.log(animal.bird.size);
// console.log(animal[bird.size]);
/////////////////////////////////////// CONECPTS OF VARIABLES
// {
//     jasdnfkjnsdjkfn
// }
// let a = {
//     bus: 4
// }
// let b;
// b = a
// a.bus = 5
// // console.log(a);
// console.log(b.bus);
// console.log(a.bus);
// console.log(b.bus);
///////////////////////////////////// DECLARING A VARIABLE IN GLOBAL OBJECT
// "use strict"
// let abc = {}
// acb = {}
// console.log(this.abc);
// console.log(this.acb);
//////////////////////////////////// CAN YOU TREAT FUNCTION AS OBJECTS?
// function name() {
//     return "hey"
// }
// name.hey = 1

//////////////////////////////////// Guess the O/P
// function Name(a, b) {
//     this.firstname = a
//     this.lastname = b

// }
// const member = new Name("subham", "dey")
// // console.log('member:', member)
// const newmember = Name("subham", "dey")
// console.log('newmember:', newmember)
// class user{
//     constructor(solid){
//         this.body=solid
//         this.engine="dsfsad"
//     }
// }
// let obj={
//     name:"dsfas",
//     classs:"fsadf"
// }
// console.log(obj);
// let x=new user("metal")
// console.log('x:', x)
//////////////////////////////////// function and Coercion
// function name(a,b) {
//     return a+b
// }
// let value=name(1,"2")
// console.log('value:',typeof(value))
// javasciprt is a dynamically type language
//////////////////////////////////// POSTFIX AND PREFIX UNARY OPERATOR
// let number=0
// console.log(number++);
// // returns 0 and than increments it

// // 0 --> 1
// console.log(++number);
// // 1-->2 return 2
// // first it increments and than it updates
// console.log(number);
//////////////////////////////////// COMPARING TWO NON PRIMITIVE DATA TYPES
// let obj1 = [1, 2]
// let obj2 = [1, 2]
// // javascript checks the
// console.log(obj1 == obj2);
//////////////////////////////////// REST OPERATOR
// rest operator is used to put the rest of some specific user -supplied values into a JS Array
// function name(...restoftheValues) {
// here you will get array not an oBject
//     // console.log('firstParam:', firstParam)
//     // console.log('secondParam:', secondParam)
//     console.log('restoftheValues:', restoftheValues)

// }
// name("subham", "dey", "huru", "software")
// const {firs,sec,...args}={
//     // you will get object
//     first:"subham",
//     sec:"dey",
//     tech:"MERN",
//     houses:"Banglore"
// }
// console.log(args);
/////////////////////////////////// EVAL FUNCTION
/////////////////////////////////// WHAT HAPPENS WHEN WE HAVE TWO SAME KEYS IN A SINGLE OBJECT
// let obj = {
//     name: "subham",
//     class: "web",
//     name: "dey"
// }
// // {class:"web",name:"dey"}
// console.log(obj);
////////////////////////////////// WHAT IF THE KEYS ARE OBJECTS ITSELF
// let emptyObj = {}
// let obj1 = { name: "subham" }
// let obj2 = { class: "web" }
// emptyObj[obj1] = "updated value"
// emptyObj[obj2] = "new Updated value"
// // console.log(typeof (obj[1]));
// console.log(emptyObj);
// object Object:"new updtaed value"
////////////////////////////////// HTML EVENT PROPAGATION
// const first = () => {

//     console.log(1);
// }
// const second = () => {
//     console.log(2);
// }
// const third = () => {
//     console.log(3);
// }
// // 1 , 2, button
// // bubbling and capturing
// // bubbling use capture is false
// // if you provide the value or the true boolean it will behave like capturing
// document.getElementById("first").addEventListener("click", first, true)
// document.getElementById("second").addEventListener("click", second, true)
// document.getElementById("third").addEventListener("click", third, true)
///////////////////////////////////// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// you have have decalred a function you want this function to be invoked right away and
// function name() {
//     // as soon as the function is invoked and function has returned something after that the function will be popped out of the call satck
//     return (() => console.log("hey i am IIFE"))()
// }
// name()
///////////////////////////////////// EMPTY SLOTS IN ARRAY
// let arr = [1, 2, 3, 4]
// arr[10] = 10
// console.log(arr);
// console.log(typeof (arr[5]));
/////////////////////////////////////  REDUCE OPERATION IN ARRAY OF ARRAYS
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// let arr=[[2, 3], [4, 5]].reduce((acc, el) => {
//     return acc.concat(el)
// }, [0, 1])
// console.log(arr);
// 0,1
// [0,1,2,3]--> accumulator in the 2nd iteration
//[0,1,2,3]+[4,5]--> accumulator
// [0,1,2,3,4,5]
/////////////////////////////////////// SET INTERVAL RETURN VALUE
// https://developer.mozilla.org/en-US/docs/Web/API/setInterval
// let id = setInterval(() => {

// }, 1000);
// let id1 = setInterval(() => {

// }, 1000);
// let id2 = setInterval(() => {

// }, 1000);
// console.log(id, id1, id2);
// clearInterval(id)
// clearInterval(id2)
// set interval returns a unique ID which can be used for the clearinterval
////////////////////////////////////////// PROMISE.RACE
// you want just the response which resolves at first
// doesnt gives you the feature of just taking the promises that got resolved it
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
//   });

//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
//   });

//   Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);
//     // Both resolve, but promise2 is faster
//   });

//  DIFFERENCE BETWEEN PROMISE.ANY AND PROMISE.RACE

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, "one");
// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(reject, 100, "two");
// });
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, "three");
// });
// Promise.any([promise3,promise1, promise2])
//     .then((value) => {
//         console.log("succeeded with value:", value);
//     })
//     .catch((reason) => {
//         // Only promise1 is fulfilled, but promise2 is faster
//         console.error("failed with reason:", reason);
//     });
///////////////////////////////////////////////// WHAT HAPPENS WHEN MAP DOESNT RETURNS ANYTHING
// let arr = [1, 2, 3, 4, "i am string"].map((el) => {
//     if (typeof el === "number") {
//         return
//     }
//     else {
//         return el + "string concatinating"
//     }
// })

// console.log(arr);
// ////////////////////////////////////////////// PASSING ARGUMENTS BY VALUE AND BY REFERENCE IN FUNCTIONS
// function name(member, year) {
//     member.name = "dey"
//     year = 1998

// }
// const person = { name: "subham" }
// const Byear = 1999
// name(person, Byear)
// console.log(person,Byear);
///////////////////////////////////////////////// IIFE AND VARIABLES IN WINDOW OBJECT
// (() => {
//     let x = (y = 20)
//     console.log(x);
// })()

// console.log(x);
// console.log(y);
///////////////////////////////////////////////// ARRAY DESTRUCTURING
// let arr = [1, 2, 3, 4, 5, 6]
// let [x,y,z] = arr
// console.log(x);
// console.log(y);
// console.log(z);
//////////////////////////////////////////////// SPREAD OPERATOR IN OBJECT
// let obj1 = { name: "subham", age: 23 }
// let obj2 = { country: "India", ...obj1 }

// console.log(obj2);
// {country: "India",{name:"subham", age: 23}}
/////////////////////////////////////////////// DEFAULT PARAMETERS
// const value={number:10}
// const increment=(x={...value})=>{
//     console.log();
// }

// ///////////////////////////////////////// SYMBOLS
// let sym1 = Symbol("")
// let sym2 = Symbol()
// let var1 = "subham"
// let var2 = "subham"
// sym1 = "subham"
// sym2 = "subham"
// console.log(sym1 === sym2);
// console.log(var1 === var2);
// console.log();
// console.log(sym1)
// console.log(sym2)
////////////////////////////////////////////
// let obj = {}
// ojb = obj
// console.log(this)

/////////////////////////////////////////////assi1
// Function expression
// Function Statement
// Anonymous function
// Named Function Expression

// function expression
// its is nothing but storing the function in a variable
// name()
// fun()
// let fun = function () {
//     console.log("i am function expression");
// };
// fun()
// function statement
//it is nothing but decalraing a function
// function name() {
//     console.log("i ama function statement");
// }

// // function without a name

// let x= function (){
//     console.log("anonymus function ");
// }
// x()
// // named function expression
// let fun = function  () {
//     // console.log(xyz);
//     console.log("i am a named function expression");
// };
// fun()
// xyz()

// Local vs Global scope
// var vs let vs const with example
// different types of functions in JavaScript
// console.log(x);
// let x=10
// var y=10
// var y=90
// let x=10
// x=20
// const z=10
// // const z=90
// z=20
// console.log(z);
// // var ,let ,const
// //const and let has a blocked scope

// function name() {
//     var y=10

// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// call,apply and Bind
// JSFI 13
// let name = {
//   fname: "subham",
//   lname: "dey",
// };
// let printfun = function (fname, lname) {
//   console.log(this.fname + this.lname);
// };

// let secondname = {
//   fname: "jujutsu",
//   lname: "kaisen",
// };
// call function borrowing

// const Person = function (name, title) {
//   const realname = name;
//   const realtitle = title;
//   this.getname = function () {
//     return realname;
//   };
//   const realfun = function () {
//     return realtitle;
//   };
//   this.gettitle = function () {
//     return realtitle;
//   };
// };
// const realperson = new Person("subham", "dey");
// console.log('realperson:', realperson)
// console.log(realperson.getname());
// console.log(realperson.realfun())
// console.log(realperson.gettitle())
// --------------------------------------POLYMORPHISM
// Polymorphism is the act of overriding methods within a derived class. Suppose you have a class called "CA" with a method "MA" on it - if you were to now create a child class of "CA" and then re-define the method "MA" on it, this would be polymorphism.
// class animal {
//   constructor(name) {
//     this.name = name;
//   }
//   makesound() {
//     console.log("bhow1");
//   }
// }
// class Dog extends animal {
//   constructor(name) {
//     super(name);
//   }
//   makesound() {
//     console.log("mowwww");
//   }
// }
// const a1 = new animal("dog");
// const cow = new Dog("cow");
// // cow.makesound();
// // a1.makesound();
//-----`-------------------------------- PROTOTYPE
// function Student() {
//     this.name = 'John';
//     this.gender = 'M';
// }

// Student.prototype.age = 15;

// var studObj1 = new Student();
// console.log('studObj1:', studObj1.__proto__.__proto__);
// alert(studObj1.age); // 15

// var studObj2 = new Student();
// alert(studObj2.age); // 15
// ------------------------------------- OBJECTS
// https://roadsidecoder.hashnode.dev/javascript-interview-questions-objects-output-based-destructuring-object
// ------------------------------------- CLOSURES
// https://roadsidecoder.hashnode.dev/closures-javascript-interview-questions
// ------------------------------------- VAR LET CONST
// {
//   let a=5

// }
// console.log(a
// shadowing
// function test() {
//   let a = "hello";
//   var b = "1";
//   if (true) {
//     // shadowing the variable
//     let b = "2";
//     // illegal shadowing where if you declare a variable with var and try to shadow it with var it throws error
//     // var a = "h1";
//     console.log(a);
//   }
//   console.log(a);
// }
// test();

// var query
// var query
// let huru
// huru=2

// hoisting
// creation phase --> execution phase
// console.log(variable);
// console.log(huru)
// let huru=20
// var variable=10

// -------------------------------------------- COERCION
// let x = 2;
// let y = "2";
// console.log(x + y);
// -------------------------------------------- DEBOUNCE using LOADASH
// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");
// let pressedcount = 0;
// let trggeredcount = 0;
// const debounceCount = _.debounce(() => {
//   count.innerHTML = ++trggeredcount;
// }, 1000);
// btn.addEventListener("click", () => {
//   btnPress.textContent = pressedcount++;
//   debounceCount();
// });
// ------------------------------------------- THROTTLE using LOADASH
// it limits the execution of an event handler function when the event is triggered continously due to use actions

// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");
// let pressedcount = 0;
// let trggeredcount = 0;
// const throttleCount = _.throttle(() => {
//   count.innerHTML = ++trggeredcount;
// }, 1000);
// btn.addEventListener("click", () => {
//   btnPress.textContent = pressedcount++;
//   throttleCount();
// });
// ------------------------------------------ DEBOUNCE OWN
// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");
// let pressedcount = 0;
// let trggeredcount = 0;
// const myownDebounce = (cb, delay) => {
//   let timer;
//   return (...args) => {

//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       cb(...args);
//     }, delay);
//   };
// };
// const debounceCount = myownDebounce(() => {
//   count.innerHTML = ++trggeredcount;
// }, 1000);
// btn.addEventListener("click", () => {
//   btnPress.textContent = pressedcount++;
//   debounceCount();
// });
// ---------------------------------- THROTTLE OWN
// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");
// let pressedcount = 0;
// let trggeredcount = 0;
// const myownThrottle = (cb, delay) => {
//   let last = 0;
//   return (...args) => {
//     let now = new Date().getTime();
//     if (now - last < delay) return;
//     last = now;
//     return cb(...args);
//   };
// };
// const ThrottleCount = myownThrottle(() => {
//   count.innerHTML = ++trggeredcount;
// }, 1000);
// btn.addEventListener("click", () => {
//   btnPress.textContent = pressedcount++;
//   ThrottleCount();
// });
// ------------------------------------------ Throw
// function errorCreator() {
//   throw "I am an error";
// }
// function comeBack() {
//   try {
//     const data = errorCreator();
//     console.log("hey i am in the try block", data);
//   } catch (error) {
//     console.log("hey i am in the catch block", error);
//   }
// }
// comeBack();
// --------------------------------- Inbuilt Constructor
// let a = 10;
// let b = 90;
// console.log("b:", typeof b);
// let c = new Number(90);
// console.log("c:", typeof c);

// console.log(c == b);
// console.log(c === b);
// --------------------------------- URL module in Node
// let url=require("url")
// const adr = 'http://localhost:8080/default?year=2022&month=september';
// let urlObject=url.parse(adr,true);
// console.log('urlObject:', urlObject)
// --------------------------------- Buffer datatype
// let buf=new Buffer(50)
// let str="123456789"
// console.log('str:length', str.length)
// buf.write(str)
// console.log('buf:length', buf.length)
// console.log('buf:', buf)
// setImmediate(() => {
//     console.log("1st Immediate");
//   });

//   setImmediate(() => {
//     console.log("2nd Immediate");
//   });

//   process.nextTick(() => {
//     console.log("1st Process");
//   });

//   process.nextTick(() => {
//     console.log("2nd Process");
//   });

//   // First event queue ends here
//   console.log("Program Started");
//   url="http://localhost:3000/rest/api/3/search"
//   query={
//     "jql":"project=TTS"
//   }

// function* yeildFunc(){
//   console.log("value 1");
//   yield 1
//   console.log("value 2");
//   yield 2
//   console.log("value 3");
// }
// const generator=yeildFunc()
// console.log(generator.next());

// "use strict";
// console.log(this);
// function name() {
//   console.log(this);
// }
// name();
// // this substitution
// // if whenever the value of this is null or undefined than it wiill be replaced my the window object
// // in use strict mode the it will give undefined and without this it will be the window object

// console.log(window.name()); //window

// const student = {
//   name: "Akshay",
//   printname: function () {
//     console.log("inside obj", this.name);
//   },
// };

// // student.printname();

// const student2 = {
//   name: "subham",
// };
// student.printname.call(student2); //now the value is name 1
// var obj1 = {
//   address: "Mumbai,India",
//   getAddress: function () {
//     console.log(this.address);
//   },
// };

// var getAddress = obj1.getAddress;
// var obj2 = { name: "akshay" };

// obj2.getAddress();

let N = 4;
let arr = [];
while (N > 0) {
  let rem = N % 2;
  arr.unshift(rem);
  N = Math.floor(N / 2);
  console.log("rem:", rem);
}

let a = 4;
let b = 5;

// console.log("and", a & b);
// console.log("or", a | b);
// console.log("~a not", ~a);
// console.log("a ^ b XOR", a ^ b);
let n = 5;
// for(let i = 0; i <= n; i++) {
//   let num = i;
//   let count = 0;

//   while (num > 0) {
//       count += num & 1; //couting the 1 in num
//       num = num >> 1;
//   }
//   result.push(count);
// }
// return result;

function DecimalToBinary(decimalNum) {
  let res = "";
  while (decimalNum != 0) {
    const lastBit = decimalNum & 1;
    res += lastBit;
    decimalNum = decimalNum >> 1;
  }
  return res;
}
console.log(DecimalToBinary(4));

function BinaryToDecimal(n) {
  let result = 0;
  let index = 0;
  while (n != 0) {
    let lastdigit = Math.floor(n % 10);

    if (lastdigit == 1) {
      result += Number(Math.pow(2, index));
    }
    n = n / 10;
    index++;
  }
  return result;
}
console.log("B to D", BinaryToDecimal(1100));

// function reverseTheNumber(num) {
//   let result = 0;
//   while (num !== 0) {
//     let lastDigit = Math.floor(num % 10);
//     result = result * 10 + lastDigit;
//     num = Math.floor(num / 10);
//   }
//   return result;
// }
// console.log("reverse", reverseTheNumber(123));


function power(x,n){
  
  
}
console.log(power(2,8));