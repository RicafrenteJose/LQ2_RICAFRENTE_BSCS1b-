// The ternary operator follows this formatcondition ? if true and expression if false;
// If the condition before '?' is true, the first expression runs. Otherwise, the second expression runs.
age >= 18 && genAverage >= 83
    ? console.log("You may enter College, under BSCS Program")
    : console.log("Both conditions may have not met and not allowed to enroll");

subject === "DSA" && grade >= 80
    ? console.log("You may enroll Application Development")
    : subject === "Math101" && grade <= 80
        ? console.log("You may enroll Calculus")
        : console.log("You have to enroll DSA and pass to enroll AD and Math101 and pass to enroll Calculus");
