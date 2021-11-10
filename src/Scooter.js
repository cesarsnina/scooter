class Scooter {
    constructor(id, origin, isCharged = true, isDamaged = false) {
        this.id = id;
        this.origin = origin;
        this.isCharged = isCharged;
        this.isDamaged = isDamaged;
    }
}

module.exports = Scooter;