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
        port = new Port('Dublin');
        expect(port.name).toEqual('Dublin');
    }); 
});