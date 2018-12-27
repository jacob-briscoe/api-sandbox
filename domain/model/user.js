const Entity = require('../shared/entity');

module.exports = class User extends Entity {

    constructor(id, username, detail = {}, created, updated) {
        super(id, created, updated);
        this._detail = detail;
        this._username = username;
    }

    get detail() {
        return this._detail;
    }

    get username() {
        return this._username;
    }

}