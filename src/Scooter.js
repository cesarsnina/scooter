class Scooter {
    constructor(id, isDamaged = false) {
        this.id = id;
        this.isDamaged = isDamaged;
        this.origin = 'Shop';
        this.batteryLife = 100
    };
};

module.exports = Scooter;
