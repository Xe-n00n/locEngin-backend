const {readAll, readOne, create, deleteOne, update} = require("../services/client.js")
async function getAllClient(req, res) {
    try{
        const data = readAll();
        res.status(200).json({
            "clients":data
        })

    }catch(error){
        res.status(500).json({"error": error.message})
    }
}


async function createClient(req, res) {
    try{
        const object = req.body;
        const newObject = create(object);
        res.status(201).json({
            "message":"Client created successfully",
            "client":newObject
        })
        
    }catch(error){
        res.status(500).json({"error": error.message})
    }
}



module.exports = {
    getAllClient,
   
    createClient
};