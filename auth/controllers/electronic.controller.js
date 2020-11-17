var ElectronicModel = require('../models/electronic.model');


// Retrieve Electronic Details From Db
var findAll = (req,res)=> {
    ElectronicModel.find({},(err,data)=>{
        if(err) throw err;
        res.json(data);
    })
}

// Retrieve Electronic details by Id
var findById = (req,res)=> {
    var idInfo = req.params._id;
    ElectronicModel.find({_id:idInfo},(err,data)=> {
        if(err) throw err;
        res.json(data);
    })
}

// Adding a new electronic
var addElectronic = (req,res)=> {
    let electronic = new ElectronicModel({   
        _id:req.body._id,
        name:req.body.name,
        price:req.body.price
    });

    electronic.save((err,result)=> {
        if(err) {
            res.json({"msg":"Id must be unique"});
        } else {
            res.json({"msg":"Record stored successfully."});
        }
    });
}

// Deleting an electronic by Id
var removeById = (req,res)=> {
    var deleteId = req.params._id;
    ElectronicModel.deleteOne({_id:deleteId},(err,result)=> {
        if(err) throw err;
        if(result.deleteCount == 0) {
            res.json({"msg":"Record not deleted."})
        } else {
            res.json({"msg":"Record deleted successfully..."})
        }
    })
}

// Updating an electronic by Id
var updateById = (req,res)=> {   
    var updateId = req.body._id;
    var updateName = req.body.name;
    var updatePrice = req.body.price;
    ElectronicModel.update({_id:updateId},{$set:{name:updateName, price:updatePrice}}, (err,result)=> {
        if(err) throw err;
        console.log(result)
        if(result.nModified>0) {
            res.json({"msg":"Record updated successfully."});
        } else {
            res.json({"msg":"Record was not updated."});
        }
    });
}

module.exports = {findAll, findById, addElectronic, removeById, updateById}
