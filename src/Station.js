class Station {
    static stations = [];

    constructor(cityName) {
        this.cityName = cityName;
        this.scooters = [];

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
            console.log(`scooter ${scooter.id} was added to ${this.cityName}`);
            this.scooters.push(scooter);
        }
    }

    /**
     * 
     * @param {Scooter} scooter The scooter to be charged
     */
    async chargeScooter(scooter) {
        if (scooter.isBroken) throw new Error('cannot charge broken scooter');

        const amountToCharge = 100 - scooter.batteryLife;

        await new Promise(resolve => setTimeout(resolve, amountToCharge * 1000));

        console.log('scooter fully charged');
    }
}

module.exports = Station;
