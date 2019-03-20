var express = require('express')
var router = express.Router();
var db = require("../models")

//routes that are exported to server through router

router.get("/",function(req,res){
  res.redirect("/burgers")
})

router.get("/burgers", function(req, res) {
  db.Burger.findAll({}).then(function(result){
      res.render("index",
      {
        burgers: result,
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
   res.redirect("/burgers")
 })
  })

router.post("/api/burgers/:id", function(req,res){
  console.log("This is req body " + req.body.name)
  let eatenBurger = {
    id:req.params.id,
    devoured: true,
    authorId: req.body.name
  }
  db.Burger.update(eatenBurger, {
    where: {
      id: req.params.id
    }
  }).then(function(){
    console.log("updated")
    res.redirect("/burgers")
   
  })
})
module.exports = router;