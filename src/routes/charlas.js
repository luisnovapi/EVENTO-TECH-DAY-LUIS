import express from 'express'
import mysql from 'mysql'
import  charlasModel from './../models/charlas'
import expositorsModel from './../models/expositors'

var routerCharlas = express.Router();

routerCharlas.get('/', (req, res) => {

    charlasModel.findAll({
            include: {
                model: expositorsModel
            }
        })
        .then(charlas => {
            res.setHeader('Content-Type', 'application/json')
            res.send(JSON.stringify(charlas)); 
        
        })
        .catch(error => {
            res.send("charlas no pudo ser visualizado "+error);
        })

});

routerCharlas.get('/:id', (req, res) => {
     charlasModel.findAll({
            where: {
                id: req.params.id
            }
        }
        )
        .then(charlas=> {
            res.setHeader('Content-Type', 'application/json')
            res.send(JSON.stringify(charlas)); 
        })
        .catch(error => {
            res.send("La charla no pudo ser visualizada "+error);
        })
});

routerCharlas.post('/', (req, res) => {

     charlasModel.create(req.body)
        .then(charlas => {
            res.setHeader('Content-Type', 'application/json')
            res.send(JSON.stringify(charlas)); 
        })
        .catch(error => {
            res.send("La Charla no pudo ser agregada debido a: "+error);
        })
});

routerCharlas.put('/:id', (req, res) => {
    let updateEvent = req.body;
    updateEvent.updatedAt = Date.now();

    charlasModel.update(updateEvent, {
            where: {
                id: req.params.id
            }
        })
        .then(charlas => {
            res.send("actualizado satisfactoriamente \n"+charlas);
        })
        .catch(error => {
            res.status(400).send('Registro no pudo ser actualizado');
        })
})

routerCharlas.delete('/:id', (req, res) => {

    charlasModel.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.send('Registro Eliminado');
        })
        .catch(error => {
            res.status(400).send('El Registro no puede eliminarse');
        })
})

export default routerCharlas;