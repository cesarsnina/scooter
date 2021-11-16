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
            city.cityName === station.cityName
        )
        for (let i = 0; i < cityObj.damagedScooter.length; i++) {
            cityObj.damagedScooter[i].isDamaged = false;
            cityObj.scooters.push(cityObj.damagedScooter[i]);
        };
        cityObj.damagedScooter = [];
        console.log(`all scooter was repaired at this ${station.cityName}`);
    };

    // return a list of station
    static listOfStation() {
        return Station.stations;
    };
    
    // return list of scooter at this station
    static scootersAtStation(station){
        const cityObj = Station.stations.find(city => 
            city.cityName === station.cityName
        );
        return cityObj.scooters;
    };
};

module.exports = App;
