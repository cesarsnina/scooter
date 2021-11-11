const Station = require('./Station');

class App {
    // list of users who downloaded the app
    static userList = [];

    // add user who downloaded the app to the userList
    static addUser(user) {
        this.userList.push(user);
    };

    // return a list of users who downloaded the app for admin
    listOfUser() {
        return App.userList;
    };

    // repair all the scooter from the station provided
    fixDamagedScooter(station) {
        const cityObj = Station.stations.find(city =>
            city.cityName === station
        )
        for (let i = 0; i < cityObj.damagedScooter.length; i++) {
            cityObj.damagedScooter[i].isDamaged = false;
            cityObj.scooters.push(cityObj.damagedScooter[i]);
        }
        cityObj.damagedScooter = [];
    };

    // return a list of station
    static listOfStation() {
        return Station.stations
    };
    
    // return list of scooter at this station
    static scootersAtStation(cityName){
        const listOfScooters = Station.listOfScooters(cityName);
        return listOfScooters;
    };
    
    // assign scooter to a user and remove scooter from station
    rentScooter(userEmail, pickUpStation) {
        let currentUser
        let rentingScooter
        for(let i=0; i<App.userList.length; i++) {
            if (App.userList[i].email === userEmail) {
                currentUser = App.userList[i] 
            }
        }
        for(let i=0; i<Station.stations.length; i++) {
            if(Station.stations[i].cityName === pickUpStation) {
                rentingScooter = Station.stations[i].scooters.pop()
            }
        }
        if (currentUser === undefined) {
            return false
        } else {
            currentUser.currentScooter = rentingScooter
        }
    }

    // assign scooter to new station and remove scooter from user
    returnScooter(returningUser, dropOffStation) {
        // go through the array of users
        for(let i=0; i<App.userList.length; i++) {
            //if user is found
            if(App.userList[i] === returningUser) {
                //the scooter to return is the user found in the array
                let returnedScooter = returningUser.currentScooter
                // add the scooter back to the dropOffStation
                dropOffStation.addScooter(returnedScooter)
                //removes scooter from user
                returningUser.currentScooter = null
                //deuct payment
                returningUser.cash = returningUser.cash - 12
            }
        }
   }    

};

// const cesar = new User("Cesar", 'cesar@gmail.com', 20, 100)
// const denille= new User('Denille', 'denille@gmail.com', 28, 90)

// const scooter1 = new Scooter("100", "The Bronx", true, false)
// const scooter2 = new Scooter("101", "The Bronx", true, false)
// const scooter3 = new Scooter("102", "The Bronx", true, false)
// const bronxStation = new Station("The Bronx")
// bronxStation.addScooter(scooter1)
// bronxStation.addScooter(scooter2)
// bronxStation.addScooter(scooter3)

// const scooterApp = new App()

// App.addUser(cesar)
// App.addUser(denille)

// scooterApp.rentScooter(cesar.email, bronxStation)
// scooterApp.rentScooter(denille.email, bronxStation)
// App.scootersAtStation('The Bronx')
// scooterApp.returnScooter(denille, bronxStation)
// App.scootersAtStation('The Bronx')
// console.log(denille.cash)

module.exports = App;



/*
rent scooter
find station // how many scooter in each station
report broken
make payment
available scooter // should be called when renting

*/
