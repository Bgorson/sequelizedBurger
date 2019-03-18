module.exports= function(sequelize,DataTypes){
    let Customer = sequelize.define("Customer",{
        name: DataTypes.STRING
    })
    return Customer;
}