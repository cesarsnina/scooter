const App = require('./App');
const { stationData, userData, scooterData } = require('./data/seed');

const Admin = new App();

// the bronx { scooter:2, isCharged:0, isDamaged:2 }
stationData[0].addScooter(scooterData[0]); // damaged
stationData[0].addScooter(scooterData[1]); // damaged
stationData[0].addScooter(scooterData[2]); // good
stationData[0].addScooter(scooterData[3]); // good

// manhattan { scooter:2, isCharged:0, isDamaged:1 }
stationData[1].addScooter(scooterData[4]); // damaged
stationData[1].addScooter(scooterData[5]); // good
stationData[1].addScooter(scooterData[6]); // good
stationData[1].addScooter(scooterData[7]); // good
stationData[1].addScooter(scooterData[8]); // good
stationData[1].addScooter(scooterData[9]); // good

// queens { scooter:1, isCharged:0, isDamaged:1 }
stationData[2].addScooter(scooterData[10]); // damaged
stationData[2].addScooter(scooterData[11]); // good

// brooklyn { scooter:3, isCharged:0, isDamaged:2 }
stationData[3].addScooter(scooterData[12]); // damaged
stationData[3].addScooter(scooterData[13]); // good
stationData[3].addScooter(scooterData[14]); // good
stationData[3].addScooter(scooterData[15]); // damaged
stationData[3].addScooter(scooterData[16]); // good

// staten Island { scooter:3, isCharged:0, isDamaged:0 }
stationData[4].addScooter(scooterData[17]); // good
stationData[4].addScooter(scooterData[18]); // good
stationData[4].addScooter(scooterData[19]); // good

// User needs to download app to rent and report
userData[0].reportBroken(scooterData[13].id, stationData[3]);
userData[1].reportBroken(scooterData[17].id, stationData[4]);
userData[2].rentScooter(stationData[2]);
userData[3].rentScooter(stationData[0]);

// All user download the scooter app
userData[0].downloadApp();
userData[1].downloadApp();
userData[2].downloadApp();
userData[3].downloadApp();
userData[4].downloadApp();
userData[5].downloadApp();
userData[6].downloadApp();
userData[7].downloadApp();
userData[8].downloadApp();
userData[9].downloadApp();

// user report scooter broken
userData[0].reportBroken(scooterData[13].id, stationData[3]);
userData[1].reportBroken(scooterData[17].id, stationData[4]);

// not old enough to rent
userData[2].rentScooter(stationData[2]);

// not enough cash to rent
userData[3].rentScooter(stationData[0]);

// successfully rented a scooter
userData[4].rentScooter(stationData[2]);
userData[5].rentScooter(stationData[0]);

// returned scooter cash was deducted
userData[5].returnScooter(stationData[3]);

// not enough cash to rent
userData[5].rentScooter(stationData[1]);
userData[6].rentScooter(stationData[4]);

// no mroe scooter at this station
userData[7].rentScooter(stationData[2]);

// fix all damaged scooter at this station
Admin.fixDamagedScooter(stationData[0]);
Admin.fixDamagedScooter(stationData[3]);
