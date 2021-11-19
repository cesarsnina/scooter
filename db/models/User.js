const {sequelize, DataTypes, Model} = require('../index');

class User extends Model{
    //space for methods
}

User.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER,
    hasApp: DataTypes.INTEGER, // 0 = false : 1 = true
    // currentScooter: maybe null and then the a forgein key 

},{
    sequelize,
    timestamps:false,
})

module.exports= User