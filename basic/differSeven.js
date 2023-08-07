function isLGSeven(x) {
    if (typeof x !== 'number') {
        return 'give me a number'
    }
    else{
        let differ = x - 7;   
        if (differ < 7) {   // differ er value jodi 7 theke kom hoy ja ashe tai returan korbe
          return  differ;
        }
        else{   // differ er value jodi 7 theke besi hoy tahole x er digun value returan korbe
          return  x*2;
        }
    }
}

console.log(isLGSeven(-15))