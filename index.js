// Code your solution in this file!
function distanceFromHqInBlocks(location){

    return location < 42 ? 42 - location : location - 42;
}

function distanceFromHqInFeet(location){
 
    return location < 42 ? (42 - location) * 264 : (location - 42) * 264;

}

function distanceTravelledInFeet(start, destination){
    return start > destination? (start - destination) * 264: (destination - start) * 264;
}

function calculatesFarePrice(start, destination){
    var distance;

    start > destination ? distance = (start - destination) * 264 : distance = (destination - start) * 264;
    if (distance <= 400){
        return 0;
    }
    else if (distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance < 2500){
        return 25;
    }
    else {
        return "cannot travel that far";
    }
}