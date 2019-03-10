const Ship = require('../src/cruise-ships');
const Itinerary = require('../src/itinerary');

describe('Ship constructor', () => {
    let dover;
    let calais;
    let itinerary;
    let cruiseShip;
    const port = {
        addShip: jest.fn(),
        removeShip: jest.fn()
    };

    beforeEach(() => {
        dover = { name: 'Dover', ships: [], ...port };
        calais = { name: 'Calais', ships: [], ...port };
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
        expect(dover.addShip).toHaveBeenCalled();
    });
    it('cruiseShip has a setSail method', () => {
        cruiseShip.setSail();
        expect(dover.removeShip).toHaveBeenCalled();
        expect(cruiseShip.currentPort).toBeFalsy();
        expect(cruiseShip.previousPort).toEqual(dover);
        // expect(dover.ships).not.toContain(cruiseShip);
    });
    it('cruiseShip has a dock method', () => {
        cruiseShip.setSail();
        cruiseShip.dock();
        expect(calais.addShip).toHaveBeenCalled();
        expect(cruiseShip.currentPort).toBeTruthy();
        expect(cruiseShip.currentPort).toEqual(calais);
        // expect(calais.ships).toContain(cruiseShip);
    });
});
