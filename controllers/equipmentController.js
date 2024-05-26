const {readAll, readOne, create, deleteOne, update} = require("../services/equipement.js")
async function getAllEquipement(req, res) {
    try{
        
        const data=readAll();
        res.status(200).json({
            "equipements":data
        })
    }catch(error){
        res.status(500).json({"error": error.message})
    }
}

async function getEquipementDisponible(req, res) {  
    try{
        const allData = readAll();
        const data = allData.filter((item) => item.ETAT === "available");
        res.status(200).json({
            "equipements":data
        })
        
    }catch(error){
        res.status(500).json({"error": error.message})
    }
}

async function createEquipement(req, res) {
    try{
        const object = req.body;
        const newObject = create(object);
        res.status(201).json({
            "message":"Equipement created successfully",
            "equipement":newObject
        })
    }catch(error){
        res.status(500).json({"error": error.message})
    }
}


module.exports = {
    getAllEquipement,
    getEquipementDisponible,
    createEquipement
};