// Code your solution in this file!

function distanceFromHqInBlocks (pickup) {
    return Math.abs(42 - pickup);
}

function distanceFromHqInFeet (pickup){
    return distanceFromHqInBlocks(pickup) * 264;
}

function distanceTravelledInFeet (start, destination){
   return Math.abs((start - destination) * 264);
}


function calculatesFarePrice(start, destination) {

    const distance = distanceTravelledInFeet (start, destination);


    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return Math.abs(((start - destination) * 264) - 400) * .02
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}