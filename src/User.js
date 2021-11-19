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
        console.log(`App download was successful for ${this.fullName}`);
    };

    // removes scooter from being rented and add it for repair
    reportBroken(id, station) {
        if (!validateIfStationExist(station) ||
            !validateIfUserHasApp(this.email)) return;

        const city = Station.stations.find(city => 
            city.cityName === station.cityName
        )

        for (let i = 0; i < city.scooters.length; i++) {
            if (city.scooters[i].id === id) {
                city.damagedScooter
                    .push(city.scooters.splice(i, 1));
                console.log(`${this.fullName} reported scooter ${id} damaged`);
                return;
            }
        }
        console.log('id provided doesn\'t exist');
    };

    // assign scooter to a user and remove scooter from station
    rentScooter(pickUpStation) {
        if (!validateIfUserHasApp(this.email) ||
            !validateAge(this.age) ||
            !validateCash(this.cash) ||
            !validateIfStationExist(pickUpStation) ||
            !validateIfUserHasScooter(this) ||
            !validateIfStationHasScooter(pickUpStation)) return;

        const rentingScooter = Station.stations.find(station => 
            station.cityName === pickUpStation.cityName).scooters.shift();
        console.log(`${this.fullName} rented scooter ${rentingScooter.id}`);
        this.currentScooter = rentingScooter;
    };

    
    async usesScooter(time){
      const batteryUsage = (time / 1000) * 5
      console.log(`${this.fullName} starts using scooter ${this.currentScooter.id}!`)
      await new Promise(resolve => setTimeout(resolve, time))
      this.currentScooter.batteryLife -= batteryUsage;
      console.log(`${this.fullName} ends using scooter ${this.currentScooter.id} with ${this.currentScooter.batteryLife} left!`)
    }

    // assign scooter to new station and remove scooter from user
    returnScooter(dropOffStation) {
        if (!validateIfStationExist(dropOffStation)) return;

        dropOffStation.addScooter(this.currentScooter);
        console.log(`${this.fullName} returned scooter ${this.currentScooter.id}`);

        this.currentScooter = null;

        this.cash = this.cash - 12;
    };
};

module.exports = User;
