const User = require('./User')
const Station = require('./Station')
const Scooter = require('./Scooter')

class App{
    static userList = []

    static addUser(user){
        this.userList.push(user)
    }

    static listOfUser() {
        console.log(App.userList);
    }

    static scootersAtStation(cityName){
        return Station.listOfScooters(cityName.length)
    }

}

const scooter1 = new Scooter("100", "The Bronx", true, false)
const scooter2 = new Scooter("101", "The Bronx", true, false)
const scooter3 = new Scooter("102", "The Bronx", true, false)
const bronxStation = new Station("The Bronx")
bronxStation.addScooter(scooter1)
bronxStation.addScooter(scooter2)
bronxStation.addScooter(scooter3)

App.scootersAtStation("The Bronx")
module.exports = App;


/*
rent scooter
find station // how many scooter in each station
report broken
make payment
available scooter // should be called when renting

*/