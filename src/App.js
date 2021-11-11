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

module.exports = App;