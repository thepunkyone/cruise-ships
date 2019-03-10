const Port = require('../src/port');

describe('Port constructor', () => {
    let port;
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
        port.addShip();
        expect(port.ships.length).toBeTruthy();
    });
});