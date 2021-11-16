class Scooter {
    constructor(id, isCharged = true, isDamaged = false) {
        this.id = id;
        this.isCharged = isCharged;
        this.isDamaged = isDamaged;
        this.origin = null;
    };
};

module.exports = Scooter;
