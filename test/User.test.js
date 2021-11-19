const App = require('../src/App');
const { stationData, userData, scooterData } = require('../src/data/seed');

stationData[0].addScooter(scooterData[0]);
stationData[0].addScooter(scooterData[1]);
stationData[0].addScooter(scooterData[2]);
stationData[1].addScooter(scooterData[3]);
stationData[1].addScooter(scooterData[4]);
stationData[1].addScooter(scooterData[5]);
stationData[2].addScooter(scooterData[6]);
stationData[3].addScooter(scooterData[7]);
stationData[3].addScooter(scooterData[8]);
stationData[3].addScooter(scooterData[9]);
stationData[3].addScooter(scooterData[10]);
stationData[3].addScooter(scooterData[11]);
stationData[4].addScooter(scooterData[12]);
stationData[4].addScooter(scooterData[13]);
stationData[4].addScooter(scooterData[14]);
stationData[4].addScooter(scooterData[15]);
stationData[4].addScooter(scooterData[16]);
stationData[4].addScooter(scooterData[17]);
stationData[4].addScooter(scooterData[18]);
stationData[4].addScooter(scooterData[19]);

describe('User class data types', () => {
    test('fullName and email should be a string', () => {
        expect(typeof userData[1].fullName).toBe('string');
        expect(userData[1].fullName).toBe('Bruce Willis');

        expect(typeof userData[1].email).toBe('string');
        expect(userData[1].email).toBe('brucewillis@aol.com');
    });

    test('age and cash should be a number', () => {
        expect(typeof userData[1].age).toBe('number');
        expect(userData[1].age).toBe(65);

        expect(typeof userData[1].cash).toBe('number');
        expect(userData[1].cash).toBe(100);
    });
});

describe('User methods', () => {
    describe('downloadApp method', () => {
        test('add user to the userList', () => {
            console.log('App App: ', App.userList)
            expect(App.userList.length).toBe(0);

            userData[0].downloadApp();
            userData[1].downloadApp();
            userData[2].downloadApp();

            expect(App.userList.length).toBe(3);
        });

        test('changes the property hasApp to true', () => {
            expect(userData[3].hasApp).toBe(false);

            userData[3].downloadApp();

            expect(userData[3].hasApp).toBe(true);
        });
    });
    describe('reportBroken method', () => {
        test('add scooter to brokenScooter', () => {
            userData[5].downloadApp();
            userData[6].downloadApp();

            expect(stationData[3].scooters.length).toBe(4);
            expect(stationData[3].damagedScooter.length).toBe(1);

            userData[5].reportBroken('108', stationData[3]);
            userData[6].reportBroken('111', stationData[3]);

            expect(stationData[3].scooters.length).toBe(2);
            expect(stationData[3].damagedScooter.length).toBe(3);
        });
    });
    describe('rentScooter method', () => {
        test('scooter should be removed from station and assign to user', () => {
            userData[4].downloadApp();

            expect(userData[4].currentScooter).toBe(null);
            expect(stationData[4].scooters.length).toBe(6);

            userData[4].rentScooter(stationData[4]);

            expect(userData[4].currentScooter.id).toBe('113');
            expect(stationData[4].scooters.length).toBe(5);
        });
    });
    describe('returnScooter method', () => {
        test('user return scooter to a station and charged', () => {
            expect(userData[4].currentScooter.id).toBe('113');
            expect(userData[4].cash).toBe(200);
            expect(stationData[0].scooters.length).toBe(1);

            userData[4].returnScooter(stationData[0]);

            expect(userData[4].currentScooter).toBe(null);
            expect(userData[4].cash).toBe(188);
            expect(stationData[0].scooters.length).toBe(2);
        });
    });
});
