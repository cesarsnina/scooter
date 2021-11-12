const Scooter = require('./Scooter');

class Station {
    static stations = [];
    // 'Manhattan', 'The Bronx', 'Queens', 'Broocklyn', 'Staten Island'

    constructor(cityName) {
        this.cityName = cityName;
        this.scooters = [];
        this.needChargeScooters = [];
        this.damagedScooter = [];
        this.constructor.stations.push(this);
    };

    // return a list of scooter at that station
    static listOfScooters(station) {
        const cityObj = Station.stations.find(city => 
            city.cityName === station
        );
        return cityObj.scooters;
    };

    // add scooter to this station
    addScooter(scooter) {
        if (scooter.isDamaged){
            this.damagedScooter.push(scooter);
        } else {
            if (scooter.isCharged){
                this.scooters.push(scooter);
            } else {
                this.needChargeScooters.push(scooter);
            }
        }
    };
};

module.exports = Station;
