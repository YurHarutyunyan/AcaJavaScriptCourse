
function isAString(param){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof param ==='string'){
                resolve(param.toUpperCase())
            }else{
                reject(`${param}`)
            }
        }, 500)
    })

}
isAString('f').then((result)=>console.log(result)).catch((error)=>console.log(error))
