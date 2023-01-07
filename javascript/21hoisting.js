//hoisting is a javascript default behaviur to moving declarations to the top.
// in other words a variable can be used before it is declared.
//ex a = 10
    let c;
    document.write(a)
//ex 2
var a;
    var b;
    function add(a,b){
    return a+b
}
  a = 10
  b = 20
  console.log(add(a,b))    

    