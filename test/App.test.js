const App = require('../src/App');
const { stationData, userData, scooterData } = require('../src/data/seed');

const Admin = new App();

describe('App Class', () => {

    test('userlist should match total number of download', () => {
        expect(App.userList.length).toBe(0);

        userData[0].downloadApp();
        userData[1].downloadApp();
        userData[2].downloadApp();

        expect(App.userList.length).toBe(3);
    });

    test('addUser should add user to the userList', () => {
        App.addUser(userData[3]);

        expect(App.userList.length).toBe(4);
    });

    test('App returns array off all stations', () => {
        expect(App.listOfStation().length).toBe(5);
    });

    test('App returns list of working scooter at specified station', () => {
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

        expect(App.scootersAtStation(stationData[0]).length).toBe(1);
        expect(App.scootersAtStation(stationData[1]).length).toBe(2);
        expect(App.scootersAtStation(stationData[2]).length).toBe(1);
        expect(App.scootersAtStation(stationData[3]).length).toBe(4);
        expect(App.scootersAtStation(stationData[4]).length).toBe(3);
    });
});

describe('Admin', () => {
    test('Admin can list all the user on the userList', () => {
        expect(Admin.listOfUser().length).toBe(4);
    });

    test('Admin fix scooter at a station', () => {
        Admin.fixDamagedScooter(stationData[0]);
        Admin.fixDamagedScooter(stationData[1]);
        Admin.fixDamagedScooter(stationData[2]);
        Admin.fixDamagedScooter(stationData[3]);
        Admin.fixDamagedScooter(stationData[4]);

        expect(App.scootersAtStation(stationData[0]).length).toBe(3);
        expect(App.scootersAtStation(stationData[1]).length).toBe(3);
        expect(App.scootersAtStation(stationData[2]).length).toBe(1);
        expect(App.scootersAtStation(stationData[3]).length).toBe(5);
        expect(App.scootersAtStation(stationData[4]).length).toBe(5);
    });
});
