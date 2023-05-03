// function test(num = 1) {
//     console.log(typeof num)
//    }
//    test()//number
//    test(undefined)//number
//    test('')//string
//    test(null)//object
/*-----------------------------------------------------*/
//    function PassbyReference(obj){
//     let tmp = obj.a ;
//     obj.a = obj.b ;
//     obj.b = tmp ;
//     console.log(`Inside Pass By Reference
//     Function -> a = ${obj.a} b = ${obj.b}`);
//     }

//     let obj = {a: 10, b: 20}
//     console.log(`Before calling Pass By Reference
//     Function -> a = ${obj.a} b = ${obj.b}`);

//     PassbyReference(obj)

//     console.log(`After calling Pass By Reference
//     Function -> a = ${obj.a} b = ${obj.b}`);
/*------------------------------------------------------*/
// function spy(func) {
//     let call = [];
  
//     function wrapper(...args) {
//       call.push(args);
//       return func(...args);
//     }
  
//     wrapper.calls = call;
//     return wrapper;
//   }

//   function work(a, b) {
//     alert(a + b);
//   }
  
//   work = spy(work);
  
//   work(1, 2); // 3
//   work(4, 5); // 9
  
//   for (let args of work.calls) {
//     alert('call:' + args.join()); // "call:1,2", "call:4,5"
//   }
  
/*---------------------------------------------------------------------------*/
// function f(x) {
//   console.log(x);
//  }

//  function delay(f,sm){
//   return (...args)=>{setTimeout(()=>f(...args),sm);} 
//  }
//  let f1000 = delay(f, 1000);
//  let f1500 = delay(f, 1500);

//  f1000('test');
//  f1500('test2');
  
/*----------------------------------------------------------------------------*/
// function filterBy(filter) {
//   if (filter.type === 'inBetween') {
//     return function(element) {
//       return element >= filter.args[0] && element <= filter.args[1];
//     }
//   } else if (filter.type === 'inArray') {
//     return function(element) {
//       return filter.args.includes(element);
//     }
//   }
// }

// function inBetween(a, b) {
//   return {
//     type: 'inBetween',
//     args: [a, b]
//   }
// }

// function inArray(array) {
//   return {
//     type: 'inArray',
//     args: array
//   }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log( arr.filter(filterBy(inBetween(3, 6))) ); // 3,4,5,6
// console.log( arr.filter(filterBy(inArray([1, 2, 10]))) ); // 1,2
/*-----------------------------------------------------------------------------*/
// function sum(x) {
//   return function(y) {
//     return x + y;
//   }
// }

// console.log(sum(1)(2));  
// console.log(sum(5)(-1));  