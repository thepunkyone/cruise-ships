const Ship = require('../src/cruise-ships');
const Port = require('../src/port');

describe('Ship constructor', () => {
    let cruiseShip;
    let dover;
    beforeEach(() => {
        dover = new Port('Dover');
        cruiseShip = new Ship(dover);
    });
    it('cruiseShip is an object', () => {
        expect(cruiseShip).toBeInstanceOf(Object);
    });
    it('cruiseShip has a currentPort property', () => {
        expect(cruiseShip.currentPort).toBe(dover);
    });
    it('cruiseShip is added to currentPort\'s ships', () => {
        expect(cruiseShip.currentPort.ships).toEqual([cruiseShip]);
    });
    it('cruiseShip has a setSail method', () => {
        cruiseShip.setSail();
        expect(cruiseShip.currentPort).toBeFalsy();
    });
    it('cruiseShip has a dock method', () => {
        const calais = new Port('Calais');
        cruiseShip.dock(calais);
        expect(cruiseShip.currentPort).toBeTruthy();
        expect(cruiseShip.currentPort).toEqual(calais);
        expect(cruiseShip.currentPort.ships).toEqual([cruiseShip]);
    });
});
