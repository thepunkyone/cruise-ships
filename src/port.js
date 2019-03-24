function Port(name) {
  this.name = name;
  this.ships = [];
}

Port.prototype.addShip = function (ship) {
  this.ships.push(ship);
};

Port.prototype.removeShip = function (ship) {
  const i = this.ships.indexOf(ship);
  this.ships.splice(i, 1);
};

//Sam's method with a false positive:
// Port.prototype.removeShip = function removeShip(ship) {
//     this.ships.splice(this.ships.indexOf[ship], 1);
//   };

module.exports = Port;
