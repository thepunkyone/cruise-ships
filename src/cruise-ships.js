function Ship(currentPort) {
    this.currentPort = currentPort;
    this.currentPort.addShip(this);
};

Ship.prototype.setSail = function () {
    this.currentPort.removeShip(this);
    this.currentPort = null;
};

Ship.prototype.dock = function (port) {
    this.currentPort = port;
    this.currentPort.addShip(this);
};

module.exports = Ship;