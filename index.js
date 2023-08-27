import express from 'express';
import fs from 'fs';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (req, res) => {
    // res.send('Mi labsito con node.js');
    fs.readFile('./views/index.html', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error en el servidor');
        } else {
            res.send(data.toString());
        }
    })
});

app.get("/:ruta", (req, res) => {
    fs.readFile(`./views/${req.params.ruta}.html`, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error en el servidor');
        } else {
            res.send(data.toString());
        }
    })
});

app.listen(PORT, () => {
    console.log(`Mi lab esta corriendo en el puerto ${PORT}`);
});