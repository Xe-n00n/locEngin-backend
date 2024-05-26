run: 
```
npm install express
npm install nodemon --save #optional
```
run server with 
```
node index.js
```
if nodemon is available, you can run with:
```
nodemon index.js
```


##Documentation

get all equipements: 
```GET IP:8080/equipement```
get equipement dispo: 
```GET IP:8080/equipement/disponible```
create equipement: 
```POST IP:8080/equipement```
example body:
  ```{
      "Idcat": 3,
      "ETAT": "available"
    }
```
create client: 
```POST IP:8080/client```
example body:
```
{
    "nom": "Emily Black",
    "adresse": "404 Birch St",
    "profession": "Engineer",
    "telephone": "555-7893",
    "solde": 100.00
}

```
