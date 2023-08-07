function mindGame(x) {
    if (typeof x !== 'number' || x <=0) {
        return 'give me a positive number'
    }else{
        let result = (((x*3) + 10)/2)-5
        return result;
    }
}

console.log(mindGame(5.5))