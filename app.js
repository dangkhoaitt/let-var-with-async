// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 3000);
// }

console.time("myTimer");
for (var i = 1; i < 6; i++) {
  let k = i;
  console.log("Loop Number" + i); // added this
  setTimeout(() => {
    console.log(`${i}: ${k}`);
  }, 10000);
}
console.log("The loop is done!");
console.timeEnd("myTimer");

// function myFunction1() {
//   var a = "Brandon";
//   console.log(a);
// }
// function myFunction2() {
//   var a = "Matt";
//   console.log(a);
// }
// function myFunction3() {
//   var a = "Bill";
//   console.log(a);
// }
// myFunction1();
// myFunction2();
// myFunction3();
