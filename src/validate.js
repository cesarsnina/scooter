const App = require("./App");

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
};

// checks if user has app
const validateIfUserHasApp = (email, App) => {
    const hasApp = App.userList.find(ele => 
        ele.email === email)
    if (!hasApp) {
        console.log('must download the scooter app to access');
        return false;
    }
    return true;
};

module.exports = { validateAge, validateCash, validateIfUserHasApp };
