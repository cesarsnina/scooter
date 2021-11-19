const Scooter = require('./Scooter')
const User = require('./User')
const Station = require('./Station')
const App = require('./App')

// Initialize objects from classes
const admin = new App()
const jorge = new User('Jorge', 'jorge@google.com', 28, 100)
const westStation = new Station('DC')
const eastStation = new Station('NYC');
const scooter1 = new Scooter(1)

async function main() {
// Add scooter to station
westStation.addScooter(scooter1)
// User setup
jorge.downloadApp()
jorge.rentScooter(westStation)

// passes in time used in minutes
await jorge.usesScooter(6000)

// jorge.returns..
jorge.returnScooter(eastStation);
await eastStation.chargeScooter(scooter1);
}

main();
