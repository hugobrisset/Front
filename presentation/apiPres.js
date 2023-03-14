var express = require("express");
var app = express();

const apiServ = {
    start : function(port) {
        //add middleware to parse json
        app.use(express.json());
        
        app.get("/test", function(req,res){

        });

        app.get("/api/customers", function(req, res){

        });

        app.listen(port, function() {
            console.log("Server running on port " + port);
        });
    }
}

module.exports = apiServ;