function distanceFromHqInBlocks(pickup){
    if(pickup < 42){
        return(42 - pickup)
    }
    else{
        return(pickup - 42)
    }
}
function distanceFromHqInFeet(pickup){
    return distanceFromHqInBlocks(pickup)*264
}
function distanceTravelledInFeet(st1, st2){
    if(st2 > st1){
        return((st2 - st1)*264)
    }
    else{
        return((st1 - st2)*264)
    }
}
function calculatesFarePrice(startingBlock, endingBlock){
    let distance = distanceTravelledInFeet(startingBlock, endingBlock)
    if (distance <= 400){
        return 0
    }
    else if (distance >= 400 && distance <= 2000){
        return (distance - 400) * 0.02
    }
    else if (distance >= 2000 && distance <= 2500){
        return 25
    }
    else if (distance > 2500){
        return "cannot travel that far"
    }
}