// error handling
// error handling is used to alert the programmer for the actual erro
//programmer is used 'try' and 'catch' method to set their own error to avooid actual error
// syntax for error handling
try {
    console.log('good morning');
    Bunty;

    console.log('good evening')
}catch{
console.log('name error')
}
// name error

////second method///
try {
    console.log('good morning');
    bunty;

    console.log('good evening')
}catch (error){
console.log(error)
}
// error at line no 18
///// 3 types of message///
try {
    bunty;

}catch (error){
console.log(error.name)
console.log(error.message)
console.log(error.stack)
}
/////json error ///
//json> javascript object notation
// json uses two methods
// 1 json.parse
// 2 json.stringify
// json.parse used to to convert json data to javascript object
// json.stringify used to to convert javascript object to json .
try {
    let json = {
        "name": "bunty",
        "age": 25
    };
    let user = JSON.parse(json)
    console.log(user.name)
    console.log(user.age)

}catch (error){
    console.log(error)

}