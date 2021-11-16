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
        scooter.origin = this.cityName;
        if (scooter.isDamaged){
            console.log(`scooter ${scooter.id} is damaged`);
            this.damagedScooter.push(scooter);
        } else {
            if (scooter.isCharged){
                console.log(`scooter ${scooter.id} was added to ${this.cityName}`);
                this.scooters.push(scooter);
            } else {
                console.log(`scooter ${scooter.id} needs more charge`);
                this.needChargeScooters.push(scooter);
            }
        }
    };
};

module.exports = Station;
