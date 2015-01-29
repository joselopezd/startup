module.exports = function Director(name) {
    this.name = name;
    this.quotes = [];

    function speak() {
        return this.quotes;
    };
}