const fib = (num) =>{
    const fibArr = [0,1];
    if (Number.isInteger(num) && num >= 2){
    
        for( let i = 2; i < num; i++){
            fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
        }
    } else if (num === 0) return [];
      else if (num === 1) return [0];
      else return Error('Invalid value');
    
    return fibArr;
};


console.log(fib(5));


module.exports = fib;
