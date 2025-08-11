function returnDay(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return null ;
    }
}
console.log(returnDay(1));  
console.log(returnDay(7));  
console.log(returnDay(4));
console.log(returnDay(0));