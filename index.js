const returnFirstTwoDrivers = function(drivers){
     return drivers.slice(0,2)
    }

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (mulitplier) {
    return function(fare){
        return fare * mulitplier
    }
}
function fareDoubler (fare){
    const cost = createFareMultiplier(2)
    return cost(fare)
}
    
function fareTripler (fare){
    const cost = createFareMultiplier(3)
    return cost(fare)
}

function selectDifferentDrivers (drivers, function2) {
    return function2(drivers)
    
}