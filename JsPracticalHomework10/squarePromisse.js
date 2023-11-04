function squarePromise(param){
    let p = new Promise((resolve,reject)=>{
        if(typeof param === 'number'){
            resolve(param*param)
        }
        if(typeof param === 'string'){
            if(parseInt(param)){
                resolve(parseInt(param)*parseInt(param))
            }else{
                reject(`cannot convert ${param} to a number`)
            }
        }
    })
    return p
}
let s = squarePromise('1235')

s.then((result)=>console.log(result)).catch((error)=>console.log(error))