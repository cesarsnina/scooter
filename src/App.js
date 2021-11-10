const User = require("./User")

class App{
    static userList = []

    static addUser(email){
        this.userList.push(email)
    }

    status listOfUser() {
        console.log(App.userList);
    }
}

module.exports = App