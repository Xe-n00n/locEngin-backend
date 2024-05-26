const fs = require("fs");
const path = require("path");

const file = path.resolve(__dirname, "../data.json");

function readAll() {
    console.log(file);
    const data = fs.readFileSync(file);
    const jsonData = JSON.parse(data);
    return jsonData["Stock"];
}

function readOne(id) {
    const data = readAll();
    return data.find((item) => item.Idcat === id);
}

function create(object) {
    const data = readAll();
    object.Idcat = data.length ? data[data.length - 1].Idcat + 1 : 1; // Generate new Idcat
    data.push(object);
    const allData = JSON.parse(fs.readFileSync(file));
    allData["Stock"] = data;
    fs.writeFileSync(file, JSON.stringify(allData, null, 2));
    return object;
}

function deleteOne(id) {
    const data = readAll();
    const newData = data.filter((item) => item.Idcat !== id);
    const allData = JSON.parse(fs.readFileSync(file));
    allData["Stock"] = newData;
    fs.writeFileSync(file, JSON.stringify(allData, null, 2));
    return newData;
}

function update(id, updatedObject) {
    const data = readAll();
    const index = data.findIndex((item) => item.Idcat === id);
    if (index !== -1) {
        data[index] = { ...data[index], ...updatedObject };
        const allData = JSON.parse(fs.readFileSync(file));
        allData["Stock"] = data;
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
