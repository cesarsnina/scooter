const { stationData, scooterData } = require('../src/data/seed');

describe('Station class data type', () => {
    test('station cityName should be a string', () => {
        expect(typeof stationData[0].cityName).toBe('string');
        expect(typeof stationData[1].cityName).toBe('string');
    });

    test('station scooters and damagedScooter should be an array', () => {
        expect(Array.isArray(stationData[0].scooters)).toBe(true);
        expect(Array.isArray(stationData[0].damagedScooter)).toBe(true);
    });
});

describe('Station can add scooter', () => {
    test('addScooter add scooter to station', () => {
        expect(stationData[0].scooters.length).toBe(0);
        expect(stationData[0].damagedScooter.length).toBe(0);

        stationData[0].addScooter(scooterData[0]);
        stationData[0].addScooter(scooterData[1]);
        stationData[0].addScooter(scooterData[2]);
        stationData[0].addScooter(scooterData[3]);
        stationData[0].addScooter(scooterData[4]);

        expect(stationData[0].scooters.length).toBe(2);
        expect(stationData[0].damagedScooter.length).toBe(3);
    });
});
