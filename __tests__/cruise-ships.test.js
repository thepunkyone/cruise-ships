const Ship = require('../src/cruise-ships');

describe('Ship constructor', () => {
    let cruiseShip;
    beforeEach(() => {
        cruiseShip = new Ship('Liverpool');
    });
    it('cruiseShip is an object', () => {
        expect(cruiseShip).toBeInstanceOf(Object);
    });
    it('cruiseShip has a starting port property', () => {
        expect(typeof cruiseShip.startingPort).toBe('string');
        expect(cruiseShip.startingPort).toBe('Liverpool');
    });
    it('cruiseShip has a setSail method', () => {
        expect(typeof cruiseShip.setSail).toBe('function');
        cruiseShip.setSail();
        expect(cruiseShip.startingPort).toBeFalsy();
    });
});