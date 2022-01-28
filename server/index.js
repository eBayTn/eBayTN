const express = require("express");
const itemRoutes = require('./routes/item.routes')
// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('./database-mysql');
var items = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));

app.use("/api/items", itemRoutes);
// app.post("/api/items",(req,res)=>{
//   var options = [req.body.username, req.body.email, req.body.password];
//   console.log(items.Item);
//   items.Item.insert(options.options,(err,result)=>{
//     if(err) {console.log(err)
//     }
//     else{
//       console.log("save",result)}
//   })
  
// })
app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
