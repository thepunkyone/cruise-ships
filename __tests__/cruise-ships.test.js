const Ship = require('../src/cruise-ships');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Ship constructor', () => {
    let dover;
    let calais;
    let itinerary;
    let cruiseShip;

    beforeEach(() => {
        dover = new Port('Dover');
        calais = new Port('Calais');
        itinerary = new Itinerary([dover, calais]);
        cruiseShip = new Ship(itinerary);
    });
    it('cruiseShip is an object', () => {
        expect(cruiseShip).toBeInstanceOf(Object);
    });
    it('cruiseShip has a currentPort property', () => {
        expect(cruiseShip.currentPort).toEqual(dover);
    });
    it('cruiseShip is added to currentPort\'s ships', () => {
        expect(cruiseShip.currentPort.ships).toContain(cruiseShip);
    });
    it('cruiseShip has a setSail method', () => {
        cruiseShip.setSail();
        expect(cruiseShip.currentPort).toBeFalsy();
        expect(cruiseShip.previousPort).toEqual(dover);
        expect(cruiseShip.previousPort.ships).toEqual([]);
    });
    it('cruiseShip has a dock method', () => {
        cruiseShip.setSail();
        cruiseShip.dock();
        expect(cruiseShip.currentPort).toBeTruthy();
        expect(cruiseShip.currentPort).toEqual(calais);
        expect(cruiseShip.currentPort.ships).toContain(cruiseShip);
    });
});
