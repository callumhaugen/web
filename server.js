const express=require("express");
const favicon=require('serve-favicon');
const path = require("path");
const app=express();
const router = express.Router();
app.use(express.static('public'));

router.get("/", function(req, res, next){
res.sendFile("public/index.html");
});


app.use("/", router);
const PORT=process.env.PORT||8080;
app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}....`);
});
