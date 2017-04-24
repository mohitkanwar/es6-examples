function global(){ // global level function
    var inscope = function (){   // a function whose scope is limited to global function
        console.log("in scope")  // log , just to test
    }
    inscope();  // call within the scope : it should work
}
global(); // call to main global function
inscope(); // call of inscope function outside its scope : it should fail

