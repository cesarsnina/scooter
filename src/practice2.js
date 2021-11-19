const Scooter = require('./Scooter')
const User = require('./User')
const Station = require('./Station')
const App = require('./App')

// Initialize objects from classes
const admin = new App()
const jorge = new User('Jorge', 'jorge@google.com', 28, 100)
const westStation = new Station('DC')
const scooter1 = new Scooter(1)

// Add scooter to station
westStation.addScooter(scooter1)

// User setup
jorge.downloadApp()
jorge.rentScooter(westStation)

// passes in time used in minutes
jorge.usesScooter(6000)

// jorge.returns..

