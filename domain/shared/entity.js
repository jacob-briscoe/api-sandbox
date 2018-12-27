
module.exports = class Entity {

    constructor(id, created, updated) {
        this._id = id;
        this._created = created;
        this._updated = updated;
    }

    sameIdentityAs(other) {
        return other !== undefined && other.id === this.id;
    }

    get id() {
        return this._id;
    }

    get created() {
        return this._created;
    }

    get updated() {
        return this._updated;
    }
}