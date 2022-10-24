import express from 'express';
import (sqrPi from "./
";
import pi from './variable'

export const app = express();

console.log(sqrPi());
console.log(pi)

//basic ts type declare
let message: string = "Hello World"
let value: number = 10
let numArray: number[] = [1, 2, 3]
let value2 = 10

function add(a: number, b: number): number {
   const answer = a + b 
    return answer
}

type Student = {
    name: string,
    age: number,
    dob: Date,
    course: string[]
}

type Child = {
    parent: string,
    address: string
}

// type OrdinaryChildren = Student | Child

// let student1: ordinaryChildren = {

//     name: "Peter",
//     age: 18,
//     dob: new Date(1990, 1, 1),
//     course: ['WEF001', 'WEF002']
// }

enum Direction{
    East,
    South,
    West,
    North
}

function turnTo(direction:Direction){
    if(direction == Direction.EAST){
        console.log("This is the direction East!");
    }
    return direction != Direction.EAST;
}


console.log(message, value)


//Generic Type
function sum <T> (nums:Array<T>){  //<--- Type error here if you write nums:Array
//	let total = 0;
	for(let num of nums){
	   console.log(num);
	}
	return nums;
}
// //Just Array is not specific enough because TypeScript cannot check
//  what actually is inside the parameter nums. Therefore we need to 
//  introduce the concept of generic which allows us to declare 
//  a composite type like Array<number> which means that we need to 
//  have an array of numbers.







