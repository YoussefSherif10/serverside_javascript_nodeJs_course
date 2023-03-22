class AgeError extends Error{
    constructor(msg) {
        super(msg);
        this.msg = msg;
        this.name = this.constructor.name;
    }
}

module.exports = {AgeError};