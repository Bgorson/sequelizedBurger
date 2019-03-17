//create burger object using ORM
var orm = require("../config/orm")


var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res)
        })
    },
    insertOne: function(vals,cb){
        var cols= ['burger_name','devoured']
        orm.insertOne("burgers",cols,vals, function(res){
            cb(res)
        })
    },
    updateOne: function(condition, cb) {
    orm.update("burgers", "devoured", "id", condition, function(res) {
      cb(res);
    });
  }
}

module.exports= burger