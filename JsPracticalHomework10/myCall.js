//   Function.prototype.myCall = function(context,...args){
//      context['thisVal']=this
//      context['thisVal'](args);
//  }
//  function foo(){
//      console.log(this.a);
//  }
//  foo.myCall({a:'hi'})
//  let a ={
//     t:this
//  }
//  console.log(a.t)
let foo = function ret(){
    function fooInerr(){
        let count =0
        count++;
        console.log(count)    
    }
    return fooInerr()
}
foo()
foo()