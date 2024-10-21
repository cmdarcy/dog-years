//creating variable for my age
let myAge = 35;

//creating variable for early years
let earlyYears = 2;

//converting early years to dog years
earlyYears *= 10.5;

//creating variable for later years
let laterYears = myAge - 2;

//converting later years to dog years
laterYears *= 4;

//adding early and later years together
let myAgeInDogYears = earlyYears + laterYears;

//creating variable for my name and converting it to lower case
const myName = "Chris".toLowerCase();

//logging my name, my age, and my age in dog years
console.log(
	`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
