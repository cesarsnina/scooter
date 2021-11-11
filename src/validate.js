const App = require("./App")

// check if user is 18 and older
const validateAge = (age) => {
    if (age < 18) {
        console.log('Need to be at least 18 years old!');
        return false;
    }
    return true;
};

// check if user has cash to pay
const validateCash = (cash) => {
    if (cash < 12) {
        console.log('Not enough cash!');
        return false;
    }
    return true;
}

// check if user exist, if not then add user
const validateUser = (email) => {
    if (App.userList.indexOf(email) >= 0) {
        console.log("Looks like you're already in the system!")
    } else {
        console.log("You're not in the system, let's add you now :)")
        App.addUser(email)
    }
    return true
}

module.exports = { validateAge, validateCash, validateUser };