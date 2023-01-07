let p1 = new Promise(function (resolve , reject) {
    setTimeout(() => {
        console.log("The first promise has resolved ")
        resolve(10)
        
    }, 1*1000);
});
let p2 = new Promise(function (resolve , reject) {
    setTimeout(() => {
        console.log("The second promise has resolved ")
        resolve(20)
        
    }, 2*1000);
});
let p3 = new Promise(function (resolve , reject) {
    setTimeout(() => {
        console.log("The third promise has resolved ")
        resolve(30)
        
    }, 3*1000);
});
Promise.all([p1, p2, p3]).then((result) =>{
    console.log(`resuts: ${result}`)
}).catch((error) => {
    console.log(`result: ${error}`)
})