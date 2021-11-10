class App{
    static userList = []

    static addUser(email){
        this.userList.push(email)
    }
}

module.exports = App