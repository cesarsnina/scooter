//********PRESENTATION STARTS AT LINE 56*********
//Import our Classes
const App = require('./App');
const Station = require('./Station');
const Scooter = require('./Scooter');
const User = require('./User');

//create admin app
const admin = new App()

//create station objects
const bronxStation = new Station("The Bronx")
const manhattanStation = new Station("Manhattan")
const queensStation = new Station("Queens")
const brooklynStation = new Station("Brooklyn")
const statenStation = new Station("Staten Island")

//create scooter objects
const scooter01 = new Scooter("101", "The Bronx", true, false)
const scooter02 = new Scooter("102", "The Bronx", true, false)
const scooter03 = new Scooter("103", "The Bronx", true, false)
const scooter04 = new Scooter("104", "Manhattan", true, false)
const scooter05 = new Scooter("105", "Manhattan", true, false)
const scooter06 = new Scooter("106", "Manhattan", true, false)
const scooter07 = new Scooter("107", "Queens", true, false)
const scooter08 = new Scooter("108", "Queens", true, false)
const scooter09 = new Scooter("109", "Brooklyn", true, false)
const scooter10 = new Scooter("110", "Brooklyn", true, false)
const scooter11 = new Scooter("111", "Brooklyn", true, false)
const scooter12 = new Scooter("112", "Brooklyn", true, false)
const scooter13 = new Scooter("113", "Staten Island", true, false)
const scooter14 = new Scooter("114", "Staten Island", true, false)

//populate stations with scooters
bronxStation.addScooter(scooter01)
bronxStation.addScooter(scooter02)
bronxStation.addScooter(scooter03)
manhattanStation.addScooter(scooter04)
manhattanStation.addScooter(scooter05)
manhattanStation.addScooter(scooter06)
queensStation.addScooter(scooter07)
queensStation.addScooter(scooter08)
brooklynStation.addScooter(scooter09)
brooklynStation.addScooter(scooter10)
brooklynStation.addScooter(scooter11)
brooklynStation.addScooter(scooter12)
statenStation.addScooter(scooter13)
statenStation.addScooter(scooter14)

//
let cityNameList = []
for (let i=0; i<App.listOfStation().length; i++) {
    cityNameList.push(`${App.listOfStation()[i].cityName} has ${App.listOfStation()[i].scooters.length} availabe scooters.`)
}

//users are being created
const user1 = new User("CJ Garcia", "person1@gmail.com", 28, 100)
const user2 = new User("Dinalisse Felicione", "person2@gmail.com", 28, 0)
const user3 = new User("Denille Carrington", "person3@gmail.com", 27, 50)
const user4 = new User("Cesar Nina", "person4@gmail.com", 27, 50)

//********PRESENTATION STARTS AT HERE*********

console.log(user4.fullName, " is going to download the app and look at the available stations and scooters.")
user4.downloadApp()
console.log(cityNameList)
console.log(user4.fullName, " chose to rent a scooter from Staten Island and is going on a joy ride")
admin.rentScooter(user4.email, statenStation.cityName)

console.log("Staten Island now has ", statenStation.scooters.length, "scooter(s) available")





console.log("\r==============")
console.log(user3.fullName, " is going to download the app and look at the available stations and scooters.")
user3.downloadApp()
console.log("Staten Island has ", statenStation.scooters.length, "scooter(s) available")
console.log(user3.fullName, " chose to rent a scooter from Staten Island as well and is going to go on a lovely ride.")
admin.rentScooter(user3.email, statenStation.cityName)

console.log("Staten Island has ", statenStation.scooters.length, "scooter(s) available")

console.log(user3.fullName, " has enjoyed her ride and wants to return it to the Manhattan Station")
console.log("Manhattan has ", manhattanStation.scooters.length, "scooter(s) available")

console.log(user3.fullName, " has returned the scooter.")
admin.returnScooter(user3, manhattanStation)

console.log("Manhattan has ", manhattanStation.scooters.length, "scooter(s) available")

console.log("Staten Island has ", statenStation.scooters.length, "scooter(s) available")



console.log("==============")
console.log(user4.fullName, " has finished his joy ride and is ready to return his scooter")
console.log(user4.fullName, " currently has $", user4.cash)
admin.returnScooter(user4, bronxStation)
console.log("After returning the scooter, ", user4.fullName, "now has $",  user4.cash)


console.log("==============")
console.log(user2.fullName, " has not downloaded the app and is trying to rent a scooter from the Bronx station")
admin.rentScooter(user2.email, bronxStation.cityName)
console.log("Let's see if she has a scooter...", user2.fullName, "currently has the scooter:", user2.currentScooter)
user2.downloadApp()
console.log("Now that she's downloaded the app, let's see if she can get a scooter")
admin.rentScooter(user2.email, bronxStation.cityName)
console.log("Uh oh! It looks like she needs to add money to her account, let's see what happens when she has money to rent a scooter")
user2.cash = 100
admin.rentScooter(user2.email, bronxStation.cityName)

console.log("Now she has money and the app. Let's see which scooter is assigned to her", user2.fullName, "currently has the scooter:", user2.currentScooter.id)
