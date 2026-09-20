// Already have the password stored in a variable
const password = "secretword123";

// Receive the value which the user entered
function checkPassword(userInput){
// Compare the two values
if (userInput === password){
// If the match print "Correct password entered"
response="Correct password entered";
    } else {
//  If they don't match print "Incorrect password, please try again"
response="Incorrect password, please try again";
            }
}
checkPassword("secretword12");
console.lg(response);