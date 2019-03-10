function Ship(currentPort) {
    this.currentPort = currentPort;
    this.currentPort.ships.push(this);
};

Ship.prototype.setSail = function () {
    this.currentPort = null;
};

Ship.prototype.dock = function (port) {
    this.currentPort = port;
};

module.exports = Ship;