class Station {
    constructor(cityName) {
        this.cityName = cityName;
        this.scooters = [];
        this.damagedScooter = [];
    }

    static listOfScooter() {
        console.log(this.scooters);
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