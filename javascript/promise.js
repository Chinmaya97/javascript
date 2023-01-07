// A JavaScript Promise object contains both the producing code and calls to the consuming code
// A JavaScript Promise object can be:

Pending
>Fulfilled
>rejected
// if fulfiled then() method executed
// if rejected then catch() executed
//// example////
let complete = false;
        let prom = new Promise(function(resolve, reject) {
    if (complete) {
        resolve("success")

    } else {
        reject("failuare")

    }
})
console.log(prop)
// success
//example 2///
function prop(complete) {
    return new Promise(function(resolve, reject) {
        if (complete) {
            resolve("success")
    
        } else {
            reject("failuare")
    
        }
    })

}
console.log(prop(true))
console.lg(prop(false))
// example 3 /////
function prop(complete) {
    return new Promise(function(resolve, reject) {
        if (complete) {
            resolve("success")
    
        } else {
            reject("failuare")
    
        }
    })

}
let onfullfilment = (result) => {
    console.log(result)

}
let onRejection = (error) => {
    console.log(error)

}
prop(true).then(onfullfilment)
prop(true).catch(onRejection)
/// example 4////
function prop(complete) {
    return new Promise(function(resolve, reject) {
        console.log('Fetching the data, please wait...')
        setTimeout(() => {
            if (complete) {
                resolve("success")
        
            } else {
                reject("failuare")
        
            }
            
        }, 1000);
    })

}


prop(true).then((result) => {
    console.log(result)}).catch((error) => {
        console.log(error)})
/// example 5////
function prop(a,b) {
    return new Promise(function(resolve, reject) {
        console.log('Fetching the data, please wait...')
        c = a/b;
        setTimeout(() => {
            if (c) {
                resolve(`your answer is  ${c}`)
        
            } else {
                reject("fail to calculate")
        
            }
            
        }, 1000);
    })

}


prop(5,2).then((result) => {
    console.log(result)}).catch((error) => {
        console.log(error)})

// ecample 6 JSON API DATA ////
/*<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    
    <script>
      function prop() {
    //return new Promise(function(resolve, reject) {
        console.log('Fetching the data, please wait...')
        //setTimeout(() => {
           $.get("https://jsonplaceholder.typicode.com/posts",function(data){
            console.log(data)
           }).fail((err)=>{
            reject("failed to load json")

           })
            
        }, 1000);
    )

}


prop().then((result) => {
    console.log(result)}).catch((error) => {
        console.log(error)})






    </script>*/