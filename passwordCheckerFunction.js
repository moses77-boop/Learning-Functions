// Already have the password stored in a variable
const password = "secretword123";

// Receive the value which the user entered
function checkPassword(userInput){
// Compare the two values
// if (userInput === password){
// // If they match print "Correct password entered"
// response = true ;
//     } else {
// //  If they don't match print "Incorrect password, please try again"
// response = false;
//             }
const response = userInput === password;
            return response;
}
// ;
const toPrint ="The result was: "  + checkPassword("secretword123");
console.log(toPrint);

