// symbol is a new datatype
// var x = Symbool()
// var x = Symbol("hello");// unique value
// symbol is used as a unique value in program
//let id  = Symbol();
//console.log(id)
// Symbol()
// let id = Symbol("hello");
console.log(id)
// we can not convert symbols to string directly .
// we can use id.toString()
let id  = Symbol("hello")
console.log(id)
alert(id.toString())
alert(id.description())
///// symbbol used inside the object///
let ind = Symbol();
let movie = {
    name : "rrr",
    rating: 8.,
    [ind] : "bollywood"

}
console.log(movie)





