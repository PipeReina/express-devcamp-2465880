//objeto de conexion
const sequelize = require('../config/seq')
//DataTypes
const {DataTypes, ValidationError} = require('sequelize')
// el modelo:
const CoursesModel = require('../models/courses')
const e = require('express')
//crear el objeto de usuario 
const Courses = CoursesModel(sequelize,DataTypes)





//get (obtener datos Read)
 exports.traerCourses = async (req,res)=>{
    try {
        const courses = await Courses.findAll();
        return res.status(200).json(
            {
                "success":true,
                "data" : courses,
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

 exports.traerCoursesId = async (req,res)=>{
    try {
        const CoursesId = await Courses.findByPk(req.params.id)
        //si usuario no existe
        if(!CoursesId){
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
"data": CoursesId  
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
exports.crearCourses = async (req,res)=>{
    try {
        const newCourses = await Courses.create(req.body);
        res.status(201).json(
           {
               "success" : true,
               "data" : newCourses
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
exports.actualizarCourses = async(req , res)=>{
    try {
        //consultar datos actualizados
      const upCourses = await Courses.findByPk(req.params.id)
      if(!upCourses){
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
            await Courses.update(req.body, {
                where: {
                id: req.params.id
                }
            });
            //seleccionar usuario actualizado
              //consultar datos actualizados
            const CoursesAct = await Courses.findByPk(req.params.id)
            //enviar response con usuario actualizado
            res.status(200).json({
                "success" : true,
                "data" :  CoursesAct
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
exports.borrarCourses = async (req , res)=>{
    //buscar el usuario por id
    try {
        const u = await Courses.findByPk(req.params.id)
        // Borrar usuario 
            await Courses.destroy({
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
    

