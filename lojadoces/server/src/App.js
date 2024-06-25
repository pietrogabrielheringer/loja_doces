import express from 'express'; // importando o express
import DoceController from './Controllers/doceController.js';

const server = express(); // iniciando o express


server.use(express.json()) // configurando o json

server.get('/', (req, res) => {
    res.status(200).json("Servidor Funcionando");
});

server.get('/doces', DoceController.read);
server.post('/doces', DoceController.create);
server.put('/doces/:id_doces', DoceController.update);
server.delete('/parafusos/:id_doces', DoceController.delete);
server.listen(5000);
