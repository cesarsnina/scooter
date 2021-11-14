const Scooter = require('./Scooter');

class Station {
    static stations = [];

    constructor(cityName) {
        this.cityName = cityName;
        this.scooters = [];
        this.needChargeScooters = [];
        this.damagedScooter = [];
        this.constructor.stations.push(this);
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
