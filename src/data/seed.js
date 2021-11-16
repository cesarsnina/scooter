const Station = require('../Station');
const User = require('../User');
const Scooter = require('../Scooter');

// cityName
const theBronx = new Station("The Bronx");
const manhattan = new Station("Manhattan");
const queens = new Station("Queens");
const brooklyn = new Station("Brooklyn");
const statenIsland= new Station("Staten Island");

const stationData = [
    theBronx,
    manhattan,
    queens,
    brooklyn,
    statenIsland
];

// fullName, email, age, cash?
const person00 = new User('Natalie Morales', 'nmorales@gmail.com', 29, 75);
const person01 = new User('Bruce Willis', 'brucewillis@aol.com', 65, 100);
const person02 = new User('Hiroyuki Sanada', 'hiroyuki5@yahoo.com', 17, 125);
const person03 = new User('Michelle Rodriguez', 'mrodriguez@gmail.com', 35);
const person04 = new User('Morgan Freeman', 'morganfreeman@aol.com', 70, 200);
const person05 = new User('Ben Affleck', 'benaffleck@gmail.com', 25, 20);
const person06 = new User('Johnny Knoxville', 'johnknoxville@hotmail.com', 44, 11);
const person07 = new User('Salma Hayek', 'salmahayek@hotmail.com', 50, 60);
const person08 = new User('Idris Elba', 'idriselba15@gmail.com', 10, 200);
const person09 = new User('Tyler Perry', 'tylerperry@gmail.com', 58, 12);

const userData = [
    person00,
    person01,
    person02,
    person03,
    person04, 
    person05,
    person06,
    person07,
    person08,
    person09,
];

// id, isCharged, isDamaged
const scooter00 = new Scooter("100", true, true);
const scooter01 = new Scooter("101", false, true);
const scooter02 = new Scooter("102", true, false);
const scooter03 = new Scooter("103", true, false);
const scooter04 = new Scooter("104", true, true);
const scooter05 = new Scooter("105", false, false);
const scooter06 = new Scooter("106", true, false);
const scooter07 = new Scooter("107", true, false);
const scooter08 = new Scooter("108", false, false);
const scooter09 = new Scooter("109", false, false);
const scooter10 = new Scooter("110", false, false);
const scooter11 = new Scooter("111", true, false);
const scooter12 = new Scooter("112", true, true);
const scooter13 = new Scooter("113", true, false);
const scooter14 = new Scooter("114", true, false);
const scooter15 = new Scooter("115", true, true);
const scooter16 = new Scooter("116", true, false);
const scooter17 = new Scooter("117", true, false);
const scooter18 = new Scooter("118", true, false);
const scooter19 = new Scooter("119", true, false);

const scooterData = [
    scooter00,
    scooter01,
    scooter02,
    scooter03,
    scooter04,
    scooter05,
    scooter06,
    scooter07,
    scooter08,
    scooter09,
    scooter10,
    scooter11,
    scooter12,
    scooter13,
    scooter14,
    scooter15,
    scooter16,
    scooter17,
    scooter18,
    scooter19,
];

module.exports = { stationData, userData, scooterData };
