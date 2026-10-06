//A function that returns a sorted list by age in ascending order
// Implementing the Arrow function

const people = [
    {name: "Jane", age: 30},
    {name: "Jacob", age: 50},
    {name: "Phil", age: 27},
    {name: "Sally", age: 40}
]
function OrderPeople(people){
    return people.sort((property1, property2) => property1.age - property2.age);
}
console.log(OrderPeople(people));