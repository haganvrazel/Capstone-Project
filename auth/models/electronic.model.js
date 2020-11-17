var mongoose = require("mongoose")
var ElectronicSchema = mongoose.Schema;


var ElectronicSchemaRef = new ElectronicSchema({
    _id:String,
    name:String,
    price:Number
});

var ElectronicModel = mongoose.model("Electronic", ElectronicSchemaRef);
module.exports = ElectronicModel;