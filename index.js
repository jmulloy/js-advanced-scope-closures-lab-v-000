function produceDrivingRange(blockRange) {
    return function (beginBlock, endBlock){
       let beginInteger = parseInt(beginBlock) 
       let endInteger = parseInt(endBlock)
       let distanceTravelled = Math.abs(beginInteger - endInteger)
        if (distanceTravelled <= blockRange){
            return `within range by ${blockRange - distanceTravelled}`
        }else {
            return `${distanceTravelled - blockRange} blocks out of range`
        }
    }
}
function produceTipCalculator(tip){
    return function (fare){
        return fare * tip
    }
}
let driverId = 0;
function createDriver(){
    return class Driver {
        constructor(name){
            this.id = driverId++;
            this.name = name;
        }
    }
}