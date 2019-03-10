const Port = require('../src/port');

describe('Port constructor', () => {
    const port = new Port('Dublin');
    const mockShip = jest.fn();

    it('port is an object', () => {
        expect(port).toBeInstanceOf(Object);
    });
    it('port has a name property and ships array', () => {
        expect(port.name).toEqual('Dublin');
        expect(port.ships).toEqual([]);
    }); 

    it('addShip method', () => {
        port.addShip(mockShip);
        expect(port.ships).toContain(mockShip);
    });

    it('removeShip method', () => {
        port.ships = [mockShip];
        port.removeShip(mockShip);
        expect(port.ships).not.toContain(mockShip);
    });
});