class Scooter {
    constructor(id, isDamaged = false) {
        this.id = id;
        this.isDamaged = isDamaged;
        this.origin = 'Shop';
    };
};

module.exports = Scooter;
