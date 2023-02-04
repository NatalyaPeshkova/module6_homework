function makeSum(x){
    return function(y){
        return x + y;
    };
};

let plusX = makeSum(5);
console.log(plusX(2));