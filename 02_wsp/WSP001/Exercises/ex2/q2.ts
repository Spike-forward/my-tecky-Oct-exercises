//Question
// on every year that is evenly divisible by 4 and 
// except(not) every year that is evenly divisible by 100

// unless(or) the year is also evenly divisible by 400
// For example, 1997 is not a leap year, but 1996 is. 1900 is not a leap year, but 2000 is

//function isLeapYear(year: number): boolean {//
function leapYear(year:number):boolean{
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
        return true;
    } else {
        return false;
    }
}

console.log(leapYear(2000));
console.log(leapYear(1990));
console.log(leapYear(1997));
console.log(leapYear(1996));
