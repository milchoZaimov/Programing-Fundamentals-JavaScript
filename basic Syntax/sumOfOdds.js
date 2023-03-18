function sumOfOdds(num){
    let oddCounter = 0;
    let sumOfNum = 0;
    for(let i = 1; i <= Number.MAX_SAFE_INTEGER; i++){
        if(i % 2 !== 0){
            oddCounter++
            sumOfNum += i
            console.log(i);
        }
        if(oddCounter === num){
            console.log(`Sum: ${sumOfNum}`);
            break;
        }
    }
}
sumOfOdds(5)