

function findFactors(num: number): number[] {
    let factors: number[] = [];
    for(let factor = 2; factor <= num / 2 ; factor++){
        if(num % factor === 0){
           factors.push(factor);
        }
    }
    return factors;
 }

 console.log(findFactors(100));
 console.log(findFactors(25))