const Ship = require('../src/cruise-ships');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Itinerary constructor', () => {
    let itinerary;
    beforeEach(() => {
        dover = new Port('Dover');
        itinerary = new Itinerary(dover);
    });
    expect('Itinerary has an starting port', () => {
        it(itinerary.ports).toEqual([dover]);
    });
});