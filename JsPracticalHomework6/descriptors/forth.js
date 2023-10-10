function forth(obj){
  const newObj = Object.create(Object.getPrototypeOf(obj))
  for(propName in obj){
    if(obj.hasOwnProperty(propName)){
      newObj[propName] = obj[propName];
    }
    Object.defineProperty(newObj,propName,Object.getOwnPropertyDescriptor(obj,propName))
  }
  
  return newObj;
}
let ob = {a:2,b:'fif'}
Object.defineProperty(ob,'b',{writable:false})
console.log()
let o = forth(ob)
console.log(Object.getOwnPropertyDescriptors(o))
