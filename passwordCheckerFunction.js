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
            return response;
}
checkPassword("secretword123");
console.log(response);

