function getRealFloor(n){
    const floor = n
    if(floor <= 0){
            return n;
    }
    if(floor <= 12){
            return n - 1;
    }
    else if(floor > 12){
        return n - 2;
    }
}
console.log(getRealFloor(0))