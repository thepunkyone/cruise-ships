function Ship(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = this.itinerary.ports[0];
    this.previousPort = null;
    this.currentPort.addShip(this);
};

Ship.prototype.setSail = function () {
    const i = this.itinerary.ports.indexOf(this.currentPort);
    this.previousPort = this.itinerary.ports[i];
    this.currentPort.removeShip(this);
    this.currentPort = null;
};

Ship.prototype.dock = function () {
    const indexPreviousPort = this.itinerary.ports.indexOf(this.previousPort);
    const i = indexPreviousPort + 1;
    this.currentPort = this.itinerary.ports[i];
    this.currentPort.addShip(this);
};

module.exports = Ship;