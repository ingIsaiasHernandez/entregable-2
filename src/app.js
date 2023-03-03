const express = require('express');
const db = require("./utils/database")
const PORT = 8001;

db.authenticate()
    .then(() => {
        console.log('Conexíon a base de datos ok')
    })
    .catch((error) => {
        console.log(error)
    })

const app = express();

app.get('/', (req, res) => {
    res.send('Bienvenido a mi servidor');
});

app.listen(PORT, (req, res) => {
    console.log(`Servidor escuchando en el puerto${PORT}`);
});