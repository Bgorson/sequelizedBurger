module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name:DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  });

  Burger.associate = function(models){
    Burger.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: true
      }
    })
  }
  return Burger;
};
