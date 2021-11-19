const { scooterData, stationData } = require('../src/data/seed');

describe('Scooter class data type', () => {
    test('id should be a string', () => {
        expect(typeof scooterData[2].id).toBe('string');
    });

    test('isDamaged should be a boolean', () => {
        expect(typeof scooterData[2].isDamaged).toBe('boolean');
    });

    test('scooter origin should be string', () => {
        expect(typeof (scooterData[2].origin)).toBe('string');
    });
});

describe('Scooter class origin', () => {
    test('scooter have an origin of Shop until moved to a station', () => {
        expect(scooterData[2].origin).toBe('Shop');

        stationData[2].addScooter(scooterData[2]);

        expect(scooterData[2].origin).toBe('Queens');
    });
});
