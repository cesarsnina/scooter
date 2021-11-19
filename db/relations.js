const User = require('./models/User')
const Scooter = require('./models/Scooter')
const Station = require('./models/Station')


User.hasOne(Scooter, {as: current_scooter})


Station.hasMany(Scooter)
Scooter.belongsTo(Station)



module.exports= {User, Scooter, Station}