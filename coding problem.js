// Prompt the user to enter their Name and store the input in the variable 'Name'
let Name = prompt("Enter your Name");

// Prompt the user to enter their Address and store the input in the variable 'Address'
let Address = prompt("Enter your Address");

// Prompt the user to enter their age, convert the input to an integer using parseInt, and store it in the variable 'age'
let age = parseInt(prompt("Enter your age"));

// Calculate the number of iterations as one-fourth of the age, using Math.floor to ensure it's an integer
let iterations = parseInt(age / 4);

// Output the number of iterations calculated based on the user's age
console.log("Number of iterations: " + iterations);

// Prompt the user to enter their Class Role (Officer, Student, Teacher) and store the input in the variable 'ClassRoles'
// Convert the input to uppercase to standardize the comparison
let ClassRoles = prompt("Enter your Class Role (Officer, Student, Teacher)").toUpperCase();

// Prompt the user to enter their Course (BSCS, BSM, BAEL), convert the input to uppercase for case-insensitive comparison, and store it in the variable 'Course'
let Course = prompt("Enter your Course (BSCS, BSM, BAEL)").toUpperCase();

// Use a switch statement to determine actions based on the user's selected Course
switch (Course) {
    case "BSCS": // If the Course is "BSCS"
        // Check the Class Role and execute the corresponding block
        if (ClassRoles === "OFFICER") {
            console.log("BSCS Officer: " + Name);
        } else if (ClassRoles === "STUDENT") {
            console.log("BSCS Student: " + Name);
        } else if (ClassRoles === "TEACHER") {
            console.log("BSCS Teacher: " + Name);
        } else {
            // If the Class Role doesn't match any of the specified roles
            console.log("BSCS - Unknown Class Role");
        }
        break; // Exit the switch statement after executing the above block

    case "BSM": // If the Course is "BSM"
        // Check the Class Role and execute the corresponding block
        if (ClassRoles === "OFFICER") {
            console.log("BSM Officer: " + Name);
        } else if (ClassRoles === "STUDENT") {
            console.log("BSM Student: " + Name);
        } else if (ClassRoles === "TEACHER") {
            console.log("BSM Teacher: " + Name);
        } else {
            // If the Class Role doesn't match any of the specified roles
            console.log("BSM - Unknown Class Role");
        }
        break; // Exit the switch statement after executing the above block

    case "BAEL": // If the Course is "BAEL"
        // Check the Class Role and execute the corresponding block
        if (ClassRoles === "OFFICER") {
            console.log("BAEL Officer: " + Name);
        } else if (ClassRoles === "STUDENT") {
            console.log("BAEL Student: " + Name);
        } else if (ClassRoles === "TEACHER") {
            console.log("BAEL Teacher: " + Name);
        } else {
            // If the Class Role doesn't match any of the specified roles
            console.log("BAEL - Unknown Class Role");
        }
        break; // Exit the switch statement after executing the above block

    default:
        // If the Course doesn't match any of the specified cases
        console.log("Unknown Course");
}
