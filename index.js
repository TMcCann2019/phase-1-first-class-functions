function receivesAFunction (callback){
    if (typeof callback === 'function'){
        callback();
    } else{
        console.log('Invalid callback provided')
    }
}

function returnsANamedFunction (){
    return function namedFunction(){
        console.log("before all")
    }
}

function returnsAnAnonymousFunction (){
    return function (){
        console.log("Hi")
    }
}
