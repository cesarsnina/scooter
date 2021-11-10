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
        return Station.listOfScooters(cityName)
    }
    
    rentScooter(userEmail, pickUpStation) {
        let currentUser
        let rentingScooter
        for(let i=0; i<App.userList.length; i++) {
            if (App.userList[i].email === userEmail) {
                currentUser = App.userList[i] 
            }
        }
        for(let i=0; i<Station.stations.length; i++) {
            if(Station.stations[i].cityName === pickUpStation.cityName) {
                rentingScooter = Station.stations[i].scooters.pop()
            }
        }
        currentUser.currentScooter = rentingScooter
    }

    
    //returnScooter(userScooter, dropOffStation) {
        //for(let i=0; i<App.)
   //}     

}
const cesar = new User("Cesar", 'cesar@gmail.com', 20, 100)
const scooter1 = new Scooter("100", "The Bronx", true, false)
const scooter2 = new Scooter("101", "The Bronx", true, false)
const scooter3 = new Scooter("102", "The Bronx", true, false)
const bronxStation = new Station("The Bronx")
bronxStation.addScooter(scooter1)
bronxStation.addScooter(scooter2)
bronxStation.addScooter(scooter3)


App.scootersAtStation("The Bronx")

const scooterApp = new App()

App.addUser(cesar)

scooterApp.rentScooter(cesar.email, bronxStation)

module.exports = App;



/*
rent scooter
find station // how many scooter in each station
report broken
make payment
available scooter // should be called when renting

*/