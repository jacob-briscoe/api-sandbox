const Entity = require('../shared/entity');

module.exports = class Task extends Entity {

    constructor(id, user, detail = {}, created, updated) {
        super(id, created, updated);
        this._user = user;
        this._detail = detail;
    }

    get user() {
        return this._user;
    }

    get detail() {
        return this._detail;
    }
}