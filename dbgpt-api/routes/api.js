const express = require('express');
const router = express.Router();
const db = require('../utils/db');

router.get('/:tabla/list', (req, res, next) => {
    const tabla = req.params.tabla;
    db.query(`SELECT * FROM ${tabla}`, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Error al obtener los datos' });
            return;
        }
        res.json(results);
    });
});

router.get('/:tabla/:id', (req, res, next) => {
    const tabla = req.params.tabla;
    const id = req.params.id;
    db.query(`SELECT * FROM ${tabla} WHERE id = ${id}`, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Error al obtener los datos' });
            return;
        }
        res.json(results);
    });
});

router.post('/:tabla', (req, res, next) => {
    const tabla = req.params.tabla;
    const datos = req.body;

    db.query(`INSERT INTO ${tabla} SET ?`, datos, (err, result) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Error al insertar los datos' });
            return;
        }
        res.status(201).json({ message: 'Datos insertados correctamente' });
    });
});

router.put('/:tabla/:id', (req, res, next) => {
    const tabla = req.params.tabla;
    const id = req.params.id;
    const datos = req.body; 

    db.query(`UPDATE ${tabla} SET ? WHERE id = ?`, [datos, id], (err, result) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Error al actualizar los datos' });
            return;
        }
        res.json({ message: 'Datos actualizados correctamente' });
    });
});

router.delete('/:tabla/:id', (req, res, next) => {
    const tabla = req.params.tabla;
    const id = req.params.id;

    db.query(`DELETE FROM ${tabla} WHERE id = ?`, id, (err, result) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Error al eliminar los datos' });
            return;
        }
        res.json({ message: 'Datos eliminados correctamente' });
    });
});


module.exports = router;
