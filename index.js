express=require('express')

const app = express();
app.use(express.json());

const {getAllEquipement, createEquipement, getEquipementDisponible} = require('./controllers/equipmentController');
const {getAllClient, createClient} = require('./controllers/clientController');
//implementation of the 4 endpoints 


app.get('/equipement', getAllEquipement);
app.get('/client', getAllClient);
app.get('/equipement/disponible',getEquipementDisponible);

app.post('/equipement', createEquipement);
app.post('/client', createClient);


app.listen(8080, () => {
    console.log('Server is running on port 8080');
})  