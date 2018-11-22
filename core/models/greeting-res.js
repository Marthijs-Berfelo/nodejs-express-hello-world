class GreetingRes {
    constructor(name = 'World', date = new Date()) {
        this.message = `Hello ${name}!`;
        this.date = date;
    }
}

module.exports = GreetingRes;