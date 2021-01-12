// Feet to Mile converter
function feetToMile(feetValue){
    var mileValue = feetValue/5280;
    return mileValue.toFixed(2);
}
console.log('Value after converted to Mile: '+feetToMile(1000));

// Wood Calculator 
function woodCalculator(numOfChair, numOfTable, numOfBed){
    var totalAmountOfWood = numOfChair*1 + numOfTable*3 + numOfBed*5;
    return totalAmountOfWood;
}
console.log('total wood needed: '+woodCalculator(2, 3, 1));

// brick Calculator
function brickCalculator(numOfFloor){
    if(numOfFloor > 20){
        totalAmountOfBrick = 15*10 + 10*12 + (numOfFloor - 20)*10;
        return totalAmountOfBrick*1000;
    }
    else if(numOfFloor > 10){
        totalAmountOfBrick = totalAmountOfBrick + 15*10 + (numOfFloor - 10)*12;
        return totalAmountOfBrick*1000;
    }
    else {
        totalAmountOfBrick = numOfFloor * 15;
        return totalAmountOfBrick*1000;
    }
}
console.log("total brick needed: ",brickCalculator(40));

// tinyFriend
function tinyFriend(names){
    var friendsName = names[0];
    for(let i = 0; i < names.length; i++){
        if (friendsName.length > names[i].length){
            friendsName = names[i];
        }
    }
    return friendsName;
}
var allFriends = ['rahim', 'karim', 'mamun', 'apu'];
var shortestName = tinyFriend(allFriends);
console.log("the shortest name is: ",shortestName);
