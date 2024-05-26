const fs = require("fs");
const path = require("path");

const file = path.resolve(__dirname, "../data.json");

function readAll() {
    console.log(file)
    const data = fs.readFileSync(file);
    const jsonData = JSON.parse(data);
    return jsonData["Clients"];
}

function readOne(id) {
    const data = readAll();
    return data.find((item) => item.Idloc === id);
}

function create(object) {
    const data = readAll();
    object.Idloc = data.length ? data[data.length - 1].Idloc + 1 : 1; // Generate new Id
    data.push(object);
    const allData = JSON.parse(fs.readFileSync(file));
    allData["Clients"] = data;
    fs.writeFileSync(file, JSON.stringify(allData, null, 2));
    return object;
}

function deleteOne(id) {
    const data = readAll();
    const newData = data.filter((item) => item.Idloc !== id);
    const allData = JSON.parse(fs.readFileSync(file));
    allData["Clients"] = newData;
    fs.writeFileSync(file, JSON.stringify(allData, null, 2));
    return newData;
}

function update(id, updatedObject) {
    const data = readAll();
    const index = data.findIndex((item) => item.Idloc === id);
    if (index !== -1) {
        data[index] = { ...data[index], ...updatedObject };
        const allData = JSON.parse(fs.readFileSync(file));
        allData["Clients"] = data;
        fs.writeFileSync(file, JSON.stringify(allData, null, 2));
        return data[index];
    } else {
        return null;
    }
}

module.exports = {
    readAll,
    readOne,
    create,
    deleteOne,
    update,
};
