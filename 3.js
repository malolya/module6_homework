function argFunc(x){
    return 8;
   }
   function sum(argFunc, x) {
    return argFunc(x)+x;
   };
   console.log(sum(argFunc,16));