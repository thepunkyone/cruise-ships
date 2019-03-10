const Ship = require('../src/cruise-ships');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Port constructor', () => {
    let port;
    const mockShip = jest.fn();
    beforeEach(() => {
        port = new Port('Dublin');
    });
    it('port is an object', () => {
        expect(port).toBeInstanceOf(Object);
    });
    it('port has a name property', () => {
        expect(port.name).toEqual('Dublin');
    }); 

    it('addShip method', () => {
        port.addShip(mockShip);
        expect(port.ships).toEqual([mockShip]);
    });

    it('removeShip method', () => {
        port.ships = [mockShip];
        port.removeShip(mockShip);
        expect(port.ships).toEqual([]);
    });
});