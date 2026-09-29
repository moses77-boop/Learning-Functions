function Gordon(a){
return a.split(" ").map(word => word.toUpperCase().replace(/A/g, "@").replace(/[EIOU]/g, "*") + "!!!!").join(" ");
}
console.log(Gordon("oh for fuck sake"))