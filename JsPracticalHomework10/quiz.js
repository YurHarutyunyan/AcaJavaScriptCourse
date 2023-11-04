// let p = new Promise((resolve,reject)=>{
// })
// let d = new Promise((resolve,reject)=>{
// })
// p.resolve().
// then(()=>console.log(1)).then(()=>{console.log(2);throw new Error('err')})
// d.resolve.catch((err)=>console.log(err))
   Promise.resolve()
   .then(function foo1() { console.log(1)})//1
   .catch(function fooCatch() {console.log(3)})
   .then(function foo2(){ 
    console.log(2);
    throw new Error(); })
   .then(() => console.log(4))
   .then(() => console.log(4))
   Promise.resolve()
   .then(() => console.log(11))//11
   .then(function foo3() { console.log(12); throw new Error(); })
   .catch(function foo4() {console.log(13)})//12,13
   .catch(() => console.log(14))//
   .then(() => console.log(15))//15,2
//1,11,12,13,15,2
    // Promise.reject('error has occured')
    // .catch((err)=>console.log(err))
    // .then(console.log(1))
    // .then(console.log(2))
/*Promise.resolve()
.then(data => {
throw new Error('Api Error');
return 1;
})
.then(data => console.log('ok'))
.catch(error => {
console.log(error.message);
return "2";
})
.then(data => {
console.log(data);
})
/*
console.log(1)
setTimeout(() => {Promise.resolve()
    .then(data => {
    throw new Error('Api Error');
    return 1;
    })
    .then(data => console.log('ok'))
    .catch(error => {
    console.log(error.message);
    return "2";
    })
    .then(data => {
    console.log(data);
    })
    console.log(1)
    setTimeout(() => {
    console.log(2)
    }, 20)
    Promise.resolve()
    .then(() => {
    console.log(3)
    return 1
    })
    .catch(e => console.log(e, 4))
    .finally(res => console.log(res, 5))
    .then((res) => console.log(res))
    console.log(6)
    let a = 5;
    setTimeout(() => {
    console.log(a);
    a = 10;
    }, 0);
    let p = new Promise((resolve, reject) => {
    console.log(a);
    a = 25;
    resolve();
    });
    p.then(res => {
    console.log('final result ', res)
    });
    console.log(a);
console.log(2)
}, 20)Promise.resolve()
.then(data => {
throw new Error('Api Error');
return 1;
})
.then(data => console.log('ok'))
.catch(error => {
console.log(error.message);
return "2";
})
.then(data => {
console.log(data);
})
console.log(1)
setTimeout(() => {
console.log(2)
}, 20)
Promise.resolve()
.then(() => {
console.log(3)
return 1
})
.catch(e => console.log(e, 4))
.finally(res => console.log(res, 5))
.then((res) => console.log(res))
console.log(6)
let a = 5;
setTimeout(() => {
console.log(a);
a = 10;
}, 0);
let p = new Promise((resolve, reject) => {
console.log(a);
a = 25;
resolve();
});
p.then(res => {
console.log('final result ', res)
});
console.log(a);
P1,2romise.resolve()
.then(() => {
console.log(3)
return 1
})
.catch(e => console.log(e, 4))
.finally(res => console.log(res, 5))
.then((res) => console.log(res))
console.log(6)
let a = 5;
setTimeout(() => {
console.log(a);
a = 10;
}, 0);
let p = new Promise((resolve, reject) => {
console.log(a);
a = 25;
resolve();
});
p.then(res => {
console.log('final result ', res)
});
console.log(a);*/