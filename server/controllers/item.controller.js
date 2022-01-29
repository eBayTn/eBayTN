// DELETE THIS LINE


// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var db = require("../database-mysql");
var Item = require('../database-mongo/Item.model.js');

// UNCOMMENT IF USING MYSQL WITH CALLBACKS
// var selectAll = function (req, res) {
//   db.query("SELECT * FROM items", (err, items, fields) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(items);
//     }
//   });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES
var selectAll = function (req, res) {
  Item.find({})
    .then((items) => {
      res.status(200).send(items);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

var insert = function (req, res) {
    Item.create(req.body)
      .then((data) => {
          console.log(req.body)
          console.log(data)
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  };

  var deletePro=(req,res)=>{
    var id=req.params.id
    Item.findByIdAndRemove(id)
    .then(()=>{
      res.send('deleted')
    }).catch((err)=>{
      res.send(err)
    })
  }
// UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT
// var selectAll = async function (req, res) {
//   try {
//     const items = await Item.find({});
//     res.status(200).send(items);
//   } catch (error) {
//     res.status(200).send(error);
//   }
// };

module.exports = { selectAll , insert, deletePro};
