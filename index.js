// Code your solution in this file!

function returnFirstTwoDrivers(drivers){   // 'old' way to do it? changes 'this' doesn't it?
    const a = function(drivers){ 
        return drivers.slice(0,2)
    }
    return a(drivers)
}

function returnLastTwoDrivers(drivers){
    const a = (drivers) => { return drivers.slice(-2) }   // must say 'return' if it's 1-liner, and otherwise

    return a(drivers)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function(fare){ return fare * int}
    
    // return function(fare){                  // same thing
    //     return fare*int
    // }
}

function fareDoubler(fare){
    const a = createFareMultiplier(2)

    return a(fare)
}

const fareTripler = createFareMultiplier(3)    // faster way to do it

function selectDifferentDrivers(drivers, f){
    return f(drivers)
}