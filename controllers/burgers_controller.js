var express = require('express')
var router = express.Router();
var db = require("../models")

//routes that are exported to server through router

router.get("/", function(req, res) {
  db.Burger.findAll({}).then(function(result){
      console.log("Specific burger" + result[0].dataValues.burger_name)
      res.render("index",
      {
        burgers: result
      })
    })
  });

router.post("/api/burgers",function(req,res){
  console.log(req.body)
 db.Burger.create({
   burger_name: req.body.name,
   devoured: false
 }).then(function(){
   console.log("added")
 })
  })

router.put("/api/burgers/:id", function(req,res){
  let eatenBurger = {
    id:req.params.id,
    devoured: true
  }
  db.Burger.update(eatenBurger, {
    where: {
      id: req.params.id
    }
  }).then(function(){
    console.log("updated")
  })
})
module.exports = router;