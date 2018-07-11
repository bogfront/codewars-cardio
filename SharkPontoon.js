function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if (dolphin)
        sharkSpeed = sharkSpeed / 2;
    return (sharkDistance / sharkSpeed) - (pontoonDistance / youSpeed) > 0 ? 'Alive!' : 'Shark Bait!';
}

console.log(shark(12, 50, 4, 8, true), "Alive!");