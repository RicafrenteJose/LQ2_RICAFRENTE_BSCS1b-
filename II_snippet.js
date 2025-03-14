// declare a var that will hold the uname,use a user input method
let registeredUsername = prompt("Register your Username:");

// declare a var that will hold the uname,use a user input method
let registeredPassword = prompt("Register your passcode:");

// declare a var that will hold the uname,use a user input method
let reEnteredPassword = prompt("Re-enter your passcode:");

// compare the Registered Password and Re-entered Password
if (registeredPassword === reEnteredPassword) {
    // window Pop-up to Congratualte the user for registering
    alert("Congratulations! You registered successfully.");

    // declare a variable that will hold the uname login
    let usernameLogin = prompt("Username:");

    // compare the registered uname and entered uname on login
    if (usernameLogin === registeredUsername) {
        // if correct uname, declare a var that will hold the encoded password on login
        let passwordLogin = prompt("Password:");

        //compare the registered pword and entered pword on LogIn
        if (passwordLogin === registeredPassword) {
            // //window Pop-up to Congratulate the user for successful LogIn.
            alert("Welcome to DSA, " + registeredUsername + "!");
        } else {
            //window Pop-up to Inform the user of the incorrect passcode
            alert("Incorrect Password, Re-run the code!");
        }
    } else {
      //window Pop-up to Inform the user of the incorrect username
        alert("Incorrect Username, Re-run the code!");
    }
} else {
    //window Pop-up to Inform the= user of the incorrect password
    alert("Password does not match, Re-run the code!");
}
