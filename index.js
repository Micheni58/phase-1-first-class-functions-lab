// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = ()=>{
    return drivers.slice(0,2);
}
console.log(returnFirstTwoDrivers());

const returnLastTwoDrivers = ()=>{
    return drivers.slice(-2);
}
console.log(returnLastTwoDrivers());

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[0]());
console.log(selectingDrivers[1]());



function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier;
    }
}
const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(10));

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(10));

const fareQuintupler = createFareMultiplier(5);
console.log(fareQuintupler(5)); 

const selectDifferentDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
 console.log(selectDifferentDrivers[0]);
 console.log(selectDifferentDrivers[1]);
