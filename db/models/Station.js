const {sequelize, DataTypes, Model} = require('../index');


class Station extends Model{
    //space for methods
}

Station.init({
    cityName: DataTypes.STRING,
    //scooters at the station via foreign key???
   
},{
    sequelize,
    timestamps:false,
})

module.exports= Station