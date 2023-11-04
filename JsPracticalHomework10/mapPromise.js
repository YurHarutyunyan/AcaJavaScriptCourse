function mappromise(promise,tranformer){
    return new Promise((resolve,reject)=>{
        promise
        .then((resultOfPromise)=>tr(resultOfPromise))
        .then((result)=>resolve(result))
        .catch((resultOfPromise)=>reject(resultOfPromise))
})
    
}
function tr(val){
    return val/5;
}
let p = new Promise((resolve,reject)=>reject('this should be written two times'))
mappromise(p,).then((val)=>console.log(val)).catch((err)=>console.log(err+err));