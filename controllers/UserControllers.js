//objeto de conexion
const sequelize = require('../config/seq')
//DataTypes
const {DataTypes, ValidationError} = require('sequelize')
// el modelo:
const UserModel = require('../models/user')
const e = require('express')
//crear el objeto de usuario 
const User = UserModel(sequelize,DataTypes)





//get (obtener datos Read)
 exports.traerUsers = async (req,res)=>{
    try {
        const users = await User.findAll();
        return res.status(200).json(
            {
                "success":true,
                "data" : users,
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

 exports.traerUsersId = async (req,res)=>{
    try {
        const userId = await User.findByPk(req.params.id)
        //si usuario no existe
        if(!userId){
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
"data": userId  
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
exports.crearUsers = async (req,res)=>{
    try {
        const newUsers = await User.create(req.body);
        res.status(201).json(
           {
               "success" : true,
               "data" : newUsers
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
exports.actualizarUsers = async (req,res)=>{
    try {
    // consultar datos actualizados 
    const upUser = await User.findByPk(req.params.id)
    if(!upUser){
        //response de error 
        res.status(422).json(
            {
                "success": false,
                "errors": [
                    "usuario no existe"
                ]  
            }
           )
    }else {
        //actualizar usuario por id 
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        // seleccionar usuario actualizado 
        // consultar datos actualizados 
    const upUser = await User.findByPk(req.params.id)
            // enviar response con ususario actualizado 
            return res.status(201).json(
                {
                     "success" : true,
                     "data" : userAct
                }
            )
    }
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
// // Delete (borrar)
exports.borrarUsers = async (req, res)=>{
     //Buscar al usuario por id
      const u = await User.findByPk(req.params.id)
    
      //Eliminar usuario por id
      await User.destroy({
        where: {
         id: req.params.id
        }
       });
    
      //Response
      res.status(200).json(
        {
          "success": true,
          "data": u
        }
      )
    }
    

