function filterString(value){
    let result = "";
    for(let i = 0; i < value.length; i++){
        if(value[i] >= "0" && value[i] <= "9"){
            result += value[i];
        }
    }
    return Number(result);
}
console.log(filterString("a1bc2d34e5"));