const Ship = require('../src/cruise-ships');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Ship constructor', () => {
    let dover;
    let itinerary;
    let cruiseShip;

    beforeEach(() => {
        dover = new Port('Dover');
        itinerary = new Itinerary([dover]);
        cruiseShip = new Ship(itinerary);
    });
    it('cruiseShip is an object', () => {
        expect(cruiseShip).toBeInstanceOf(Object);
    });
    it('cruiseShip has a currentPort property', () => {
        expect(cruiseShip.currentPort).toBe(dover);
    });
    it('cruiseShip is added to currentPort\'s ships', () => {
        expect(cruiseShip.currentPort.ships).toContain(cruiseShip);
    });
    it('cruiseShip has a setSail method', () => {
        const previousCurrentPort = cruiseShip.currentPort;
        cruiseShip.setSail();
        expect(cruiseShip.currentPort).toBeFalsy();
        expect(previousCurrentPort.ships).toEqual([]);
    });
    it('cruiseShip has a dock method', () => {
        const calais = new Port('Calais');
        cruiseShip.dock(calais);
        expect(cruiseShip.currentPort).toBeTruthy();
        expect(cruiseShip.currentPort).toEqual(calais);
        expect(cruiseShip.currentPort.ships).toContain(cruiseShip);
    });
});
