<<<<<<< HEAD
// function mapPromise(transformer, promise) {
//   return new Promise((resolve, reject) => {
//     if (transformer && promise) {
//       resolve(promise).then((val) => transformer(val));
//     } else {
//       reject("hi i am an error");
//     }
//   });
// }
// const myPromise = new Promise((resolve, reject) => {
//   resolve(2);
// }).then((val) => val * 2);
// function trn(val) {
//   return val * 2;
// }
// mapPromise(trn, myPromise)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
function mapPromise(func, promise) {
  return new Promise((resolve, reject) => {
    if (func && promise) {
      resolve(2);
    } else {
      reject("error is thrown");
    }
  });
}
let p = new Promise((resolve, reject) => {
    promise()
});
let f = function (val) {
  return val * 3;
};
let m = mapPromise(f, p);
m.then((val) => console.log(val)).catch((err) => console.log(err));
=======
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
>>>>>>> 70c32145435c1f8c494d3b6cac53a1a23b6be753
