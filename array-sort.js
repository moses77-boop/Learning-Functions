//A function that returns a sorted list by age in ascending order
// Implementing the Arrow function

const people = [
    {name: "Jane", age: 30}, //objects
    {name: "Jacob", age: 50}, //objects
    {name: "Phil", age: 27}, //objects
    {name: "Sally", age: 40} //objects
]
function OrderPeople(people){
    return people.sort((property1, property2) => property1.age - property2.age);
}
// .sort() method is used to sort objects in an array.
console.log(OrderPeople(people));