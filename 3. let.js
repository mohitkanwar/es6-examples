for(var i=0;i<5;i++){ // a loop with var i
    console.log("var",i) // do something in loop
}
console.log("var",i);  // scope of var i is leaked outside

for(let j=0;j<5;j++){ // a loop with let j
 console.log("let",j) // do something in loop
}
console.log("let",j); // j is not accessible outside the loop