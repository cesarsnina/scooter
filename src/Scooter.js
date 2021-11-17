class Scooter {
    constructor(id, isDamaged = false) {
        this.id = id;
        this.isDamaged = isDamaged;
        this.origin = null;
    };
};

module.exports = Scooter;
