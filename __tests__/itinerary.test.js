const Ship = require('../src/cruise-ships');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Itinerary constructor', () => {
    let dover;
    let calais;
    let itinerary;
    beforeEach(() => {
        dover = new Port('Dover');
        calais = new Port('Calais');
        itinerary = new Itinerary([dover, calais]);
    });
    it('Itinerary has an starting port', () => {
        expect(itinerary.ports).toEqual([dover, calais]);
    });
});