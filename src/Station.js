class Station {
    static stations = [];
    // 'Manhattan', 'The Bronx', 'Queens', 'Broocklyn', 'Staten Island'
    // {name: 'bronx', scooters:[]},{name:"queens", scooters:[]}

    constructor(cityName) {
        this.cityName = cityName;
        this.scooters = [];
        this.needChargeScooters = []
        this.damagedScooter = [];
        this.constructor.stations.push(this);
    }

    static listOfScooters(station) {
        const cityObj = Station.stations.find(ele => 
            ele.cityName === station
        )
        return cityObj.scooters;
    }

    addScooter(scooter) {
        if (scooter.isDamaged){
            this.damagedScooter.push(scooter)
        } else {
            if (scooter.isCharged){
                this.scooters.push(scooter);
            } else {
                this.needChargeScooters.push(scooter);
            }
        }
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