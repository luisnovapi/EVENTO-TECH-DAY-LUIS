import express from 'express'
import expositorsModel from './../models/expositors'

var routerExpositors = express.Router();

routerExpositors.get('/', (req, res) => {

    expositorsModel.findAll()
        .then(expositors => {
            res.setHeader('Content-Type', 'application/json')
            res.send(JSON.stringify(expositors)); 
        })
        .catch(error => {
            res.send("Los expositores no pueden ser visualizados "+error);
        })

});

routerExpositors.get('/:id', (req, res) => {
    expositorsModel.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(expositors => {
            res.setHeader('Content-Type', 'application/json')
            res.send(JSON.stringify(expositors)); 
        })
        .catch(error => {
            res.send("Los expositores no pueden ser visualizados "+error);
        })
});

routerExpositors.post('/', (req, res) => {
    let newEvent = req.body;

    expositorsModel.create(newEvent)
        .then(expositors => {
            res.send(expositors);
        })
        .catch(error => {
            res.status(400).send(error);
        })
});

routerExpositors.put('/:id', (req, res) => {
    let updateEvent = req.body;

    expositorsModel.update(updateEvent, {
            where: {
                id: req.params.id
            }
        })
        .then(expositors => {
            res.send(expositors);
        })
        .catch(error => {
            res.status(400).send(error);
        })
})

routerExpositors.delete('/:id', (req, res) => {

    expositorsModel.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.send('deleted');
        })
        .catch(error => {
            res.send("El Expositor Seleccionado no puede ser eliminado"+error);
        })
})

export default routerExpositors;