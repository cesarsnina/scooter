class Station {
    static stations = [];
    // 'Manhattan', 'The Bronx', 'Queens', 
    // 'Broocklyn', 'Staten Island'

    constructor(cityName) {
        this.cityName = cityName;
        this.scooters = [];
        this.damagedScooter = [];
        this.constructor.stations.push(this);
    }

    static listOfScooter(station) {
        const cityObj = this.stations.find((ele) => {
            ele.cityName === station
        })
        console.log(cityObj.scooters);
    }

    addScooter(scooter) {
        //will only add if charge is full and broken is false
        this.scooters.push(scooter);
    }

    faultyScooter(id) {
        for (let i = 0; i < this.scooters.length; i++) {
            if (id === this.scooters[i].id) {
                const scooter = this.scooters.splice(i, 1);
                this.damagedScooter.push(scooter);
            }
        }
    }
}

module.exports = Station;