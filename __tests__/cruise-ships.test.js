const Ship = require('../src/cruise-ships');
const Port = require('../src/port');

describe('Ship constructor', () => {
    let cruiseShip;
    let port = new Port('Liverpool');
    beforeEach(() => {
        cruiseShip = new Ship(port);
    });
    it('cruiseShip is an object', () => {
        expect(cruiseShip).toBeInstanceOf(Object);
    });
    it('cruiseShip has a currentPort property', () => {
        expect(cruiseShip.currentPort).toBe(port);
    });
    it('cruiseShip has a setSail method', () => {
        cruiseShip.setSail();
        expect(cruiseShip.currentPort).toBeFalsy();
    });
    it('cruiseShip has a dock method', () => {
        let calais = new Port('Calais');
        cruiseShip.dock(calais);
        expect(cruiseShip.currentPort).toBeTruthy();
        expect(cruiseShip.currentPort).toEqual(calais);
    });
});
