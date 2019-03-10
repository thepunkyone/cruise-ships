function Port(name) {
    this.name = name;
    this.ships = [];
};

Port.prototype.addShip = function (ship) {
    this.ships.push(ship);
};

Port.prototype.removeShip = function (ship) {
    const i = this.ships.indexOf(ship);
    if (i < 0 || i === null || i === undefined) { throw new Error('Invalid index!'); }
        this.ships.splice(i, 1);
};

module.exports = Port;