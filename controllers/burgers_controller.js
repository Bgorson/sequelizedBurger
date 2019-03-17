var express = require('express')
var router = express.Router();
var burger = require("../models/burger.js")

//routes that are exported to server through router

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var obj = {
        burgers: data
      };
      console.log(obj);
      res.render("index",obj)
    });
  });

router.post("/api/burgers",function(req,res){
    burger.insertOne([req.body.name,0],function(result){
      res.json({id: result.insertId})
    })
  })

router.put("/api/burgers/:id", function(req,res){
  var name = "id = " + req.params.id;
  console.log(name)
  burger.updateOne(req.params.id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
})



module.exports = router;