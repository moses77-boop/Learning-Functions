function abbrevName(name){
    return name.split(' ').map(name => name[0]).join(".");
}
console.log(abbrevName("Precious Moses"))