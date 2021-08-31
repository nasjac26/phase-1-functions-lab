// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
    if (streetNumber >= 42) {
        return (streetNumber - 42);
    } else {
        return (42 - streetNumber);
    }
    
}

function distanceFromHqInFeet(streetNumber) {
    return Math.abs((streetNumber - 42) * 264) 
}

function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs((startBlock - endBlock) * 264)
}

function calculatesFarePrice(start, destination) {
    let distanceTraveled = Math.abs((start - destination) * 264);
    if (distanceTraveled <= 400)
        return 0;
    else if(distanceTraveled > 400 && distanceTraveled <= 2000) {
        return ((distanceTraveled - 400) * .02);
    }
    else if(distanceTraveled > 2000 && distanceTraveled <=2500) {
        return 25;
    }
    else if(distanceTraveled > 2500) {
        return 'cannot travel that far';
    }
}
