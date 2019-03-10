const Ship = require('../src/cruise-ships');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Itinerary constructor', () => {
    let dover;
    let itinerary;
    beforeEach(() => {
        dover = new Port('Dover');
        itinerary = new Itinerary([dover]);
    });
    it('Itinerary has an starting port', () => {
        expect(itinerary.ports).toEqual([dover]);
    });
});