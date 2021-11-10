const User = require("./User")

class App{
    static userList = []

    static addUser(email){
        this.userList.push(email)
    }

    static listOfUser() {
        console.log(App.userList);
    }
}

module.exports = App;


/*
rent scooter
find station // how many scooter in each station
report broken
make payment
available scooter // should be called when renting

*/