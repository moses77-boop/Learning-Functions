// Learning how to use switch statement
function howManyDays(month){
    let days;
    switch(month){
        case 1:
            console.log("January");
        case 3:
            console.log("March");
        case 5:
            console.log("May");
        case 7:
            console.log("July");
        case 8:
            console.log("August");
        case 10:
            console.log("October");
        case 12:
            console.log("December");
        days = 31;
        break;

        case 4:
            console.log("April");
        case 6:
            console.log("June");
        case 9:
            console.log("September");
        case 11:
            console.log("November")
        days = 30;
        break;

        case 2:
            console.log("February");
            
        default:
            days = "Invalid month";

    }
}