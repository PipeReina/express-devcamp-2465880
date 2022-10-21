const express = require('express');
const router = express.Router();

//get (obtener datos Read)
router.get('/', (req,res)=>{
    return res.status(200).json(
        {
            "message" : "aqui se van a mostrar todos los bootcamps"
        }
    )
 })
 //get (obtener datos Read)
 router.get('/', (req,res)=>{
    return res.status(200).json(
        {
            "message" : "aqui se van a mostrar todos los bootcamps"
        }
    )
 })
 //obtener recurso con id

 router.get('/:id', (req,res)=>{
    return res.status(200).json(
        {
            "message" : `aqui se van a mostrar todos los bootcamps cuyo id es ${req.params.id}`
        }
    )
 })
 // Post: crear un nuevo recurso
 router.post('/', (req,res)=>{
    return res.status(201).json(
        {
            "message" : `aqui se va a crear el todos los bootcamps`
        }
    )
 })

// Put - Patch (actualizar)
router.put('/:id', (req,res)=>{
    return res.status(201).json(
        {
            "message" : `aqui se se actualiza el bootcamp cuyo id es ${req.params.id}`
        }
    )
 })
// Delete (borrar)
router.delete('/:id', (req,res)=>{
    return res.status(201).json(
        {
            "message" : `aqui se se elimino el bootcamp cuyo id es ${req.params.id}`
        }
    )
 })


module.exports = router