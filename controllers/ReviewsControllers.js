//objeto de conexion
const sequelize = require('../config/seq')
//DataTypes
const {DataTypes, ValidationError} = require('sequelize')
// el modelo:
const ReviewsModel = require('../models/reviews')
const e = require('express')
//crear el objeto de usuario 
const Reviews = ReviewsModel(sequelize,DataTypes)





//get (obtener datos Read)
 exports.traerReviews = async (req,res)=>{
    try {
        const reviews = await Reviews.findAll();
        return res.status(200).json(
            {
                "success":true,
                "data" : reviews,
            }
        )
    } catch (error) {
        if (error instanceof ValidationError) {
            const errors = error.errors.map((e)=>
        e.message
        )
        res.status(422).json({
            "success":true,
            "errors":errors,
        })
        } else {
            res.status(500).json({
                "success":true,
                "errors":"error de servidor",
            })
        }
    }
 }

 //obtener recurso con id

 exports.traerReviewsId = async (req,res)=>{
    try {
        const ReviewsId = await Reviews.findByPk(req.params.id)
        //si usuario no existe
        if(!ReviewsId){
            res.status(422).json(
                {
                    "success": false,
                    "errors": [
                        "usuario no existe"
                    ]  
                }
               )   
        }else{
            res.status(200).json(
                {
                    "success": true,
"data": ReviewsId  
                }
               )   
        }     
    } catch (error) {
        res
        .status(500)
        .json({
             "success": false, 
             "errors":  "error de servidor"  
        })
    }
 }
 // Post: crear un nuevo recurso
exports.crearReviews = async (req,res)=>{
    try {
        const newReviews = await Reviews.create(req.body);
        res.status(201).json(
           {
               "success" : true,
               "data" : newReviews
           }
       ) 
    } catch (error) {
        if (error instanceof ValidationError) {
            const errors = error.errors.map((e)=>
        e.message
        )
        res.status(422).json({
            "success":true,
            "errors":errors,
        })
        } else {
            res.status(500).json({
                "success":true,
                "errors":"error de servidor",
            })
        }
    }
    
}

// // Put - Patch (actualizar)
exports.actualizarReviews = async(req , res)=>{
    try {
        //consultar datos actualizados
      const upReviews = await Reviews.findByPk(req.params.id)
      if(!upReviews){
        //response de usuario no encontrado
        res.status(422).json(
            {
                "success": false,
                "errors": [
                    "usuario no existe"
                ]  
            }
           )   
       }else{
            //actualizar usuario por id
            await Reviews.update(req.body, {
                where: {
                id: req.params.id
                }
            });
            //seleccionar usuario actualizado
              //consultar datos actualizados
            const ReviewsAct = await Reviews.findByPk(req.params.id)
            //enviar response con usuario actualizado
            res.status(200).json({
                "success" : true,
                "data" :  ReviewsAct
            })
       }
    } catch (error) {
        res
        .status(500)
        .json({
             "success": false, 
             "errors":  "error de servidor"  
        })
    }
}
// // Delete (borrar)
//DELETE: borrar un Usuario
exports.borrarReviews = async (req , res)=>{
    //buscar el usuario por id
    try {
        const u = await Reviews.findByPk(req.params.id)
        // Borrar usuario 
            await Reviews.destroy({
                where: {
                id: req.params.id
                }
            })
            res.status(200).json(
                {
                    "success": true,
                    "data": u
                }
            )
    } catch (error) {
        res
            .status(500)
            .json({
                 "success": false, 
                 "errors":  "error de servidor"  
            })
    }
        
    }
    

