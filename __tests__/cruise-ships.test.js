const Ship = require('../src/cruise-ships');
const Itinerary = require('../src/itinerary');

describe('Ship constructor', () => {
    let dover;
    let calais;
    let itinerary;
    let cruiseShip;

    beforeEach(() => {
        dover = { name: 'Dover', ships: [], addShip: jest.fn(), removeShip: jest.fn() };
        calais = { name: 'Calais', ships: [], addShip: jest.fn(), removeShip: jest.fn() };
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
        expect(cruiseShip.previousPort.ships).not.toContain(cruiseShip);
    });
    it('cruiseShip has a dock method', () => {
        cruiseShip.setSail();
        cruiseShip.dock();
        expect(cruiseShip.currentPort).toBeTruthy();
        expect(cruiseShip.currentPort).toEqual(calais);
        expect(cruiseShip.currentPort.ships).toContain(cruiseShip);
    });
});
