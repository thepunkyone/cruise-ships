function Ship(currentPort) {
    this.currentPort = currentPort;
    this.currentPort.addShip(this);
};

Ship.prototype.setSail = function () {
    this.currentPort = null;
};

Ship.prototype.dock = function (port) {
    this.currentPort = port;
};

module.exports = Ship;