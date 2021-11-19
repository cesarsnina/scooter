class Scooter {
    constructor(id, isDamaged = false) {
        this.id = id;
        this.isDamaged = isDamaged;
        this.origin = null;
        this.batteryLife = 100
    };
};

module.exports = Scooter;
