const App = require('./App');
const Station = require('./Station');
const { validateCash,
        validateIfUserHasApp,
        validateIfStationHasScooter,
        validateAge, 
        validateIfStationExist,
        validateIfUserHasScooter } = require('./validate');

class User {
    constructor(fullName, email, age, cash = 0)  {
        this.fullName = fullName;
        this.email = email;
        this.age = age;
        this.cash = cash;
        this.hasApp = false;
        this.currentScooter = null;
        this.app = App;
    };

    // download the scooter app
    downloadApp() {
        this.hasApp = true;
        this.app.addUser(this);
        console.log('App download was successful for', this.fullName)
    };

    // removes scooter from being rented and add it for repair
    reportBroken(id, station) {
        if (!validateIfStationExist(station)) return;

        const city = Station.stations.find(city => 
            city.cityName === station
        )

        for (let i = 0; i < city.scooters.length; i++) {
            if (city.scooters[i].id === id) {
                city.damagedScooter
                    .push(city.scooters.splice(i, 1));
                return;
            }
        }
        console.log('id provided doesn\'t exist');
    };

    // assign scooter to a user and remove scooter from station
    rentScooter(pickUpStation) {
        if (!validateIfUserHasApp(this.email) ||
            !validateAge() ||
            !validateCash(this.cash) ||
            !validateIfStationExist(pickUpStation) ||
            !validateIfUserHasScooter() ||
            !validateIfStationHasScooter(pickUpStation)) return;

        const rentingScooter = Station.stations.find(station => 
            station.cityName === pickUpStation).scooters.shift();

        this.currentScooter = rentingScooter;
    };

    // assign scooter to new station and remove scooter from user
    returnScooter(dropOffStation) {
        if (!validateIfStationExist(dropOffStation)) return;

        dropOffStation.addScooter(this.currentScooter);

        this.currentScooter = null;

        this.cash = this.cash - 12;
    };
};

module.exports = User;
