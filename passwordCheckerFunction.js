// Already have the password stored in a variable
const password = "secretword123";

// Receive the value which the user entered
function checkPassword(userInput){
// Compare the two values
if (userInput === password){
// If the match print "Correct password entered"
console.log("Correct password entered");
    } else {
//  If they don't match print "Incorrect password, please try again"
console.log("Incorrect password, please try again");
            }
}
checkPassword("secretword123");