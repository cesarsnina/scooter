const {sequelize, DataTypes, Model} = require('../index');


class Scooter extends Model{
    //space for methods
}

Scooter.init({
    scooterID: DataTypes.STRING,
    isCharged: DataTypes.INTEGER, // 0=false ; 1 = true
    isDamaged: DataTypes.INTEGER, // 0=false ; 1 = true
    
   
},{
    sequelize,
    timestamps:false,
})

module.exports= Scooter