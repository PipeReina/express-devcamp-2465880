//objeto de conexion
const sequelize = require('../config/seq')
//DataTypes
const {DataTypes} = require('sequelize')
// el modelo:
const UserModel = require('../models/user')
//crear el objeto de usuario 
const User = UserModel(sequelize,DataTypes)





//get (obtener datos Read)
 exports.traerUsers = async (req,res)=>{
    const users = await User.findAll();
    return res.status(200).json(
        {
            "success":true,
            "data" : users,
        }
    )
 }

 //obtener recurso con id

 exports.traerUsersId = async (req,res)=>{
    const userId = await User.findByPk(req.params.id)
    return res.status(200).json(
        {
            "success" : true,
            "data" : userId,
        }
    )
 }
 // Post: crear un nuevo recurso
exports.crearUsers = async (req,res)=>{
    const newUsers = await User.create(req.body);
    res.status(201).json(
       {
           "success" : true,
           "data" : newUsers
       }
   )
}

// // Put - Patch (actualizar)
exports.actualizarUsers = async (req,res)=>{
    await User.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    // consultar datos actualizados 
    const upUser = await User.findByPk(req.params.id)

    return res.status(201).json(
       {
            "success" : true,
            "data" : upUser
       }
   )
}
// // Delete (borrar)
exports.eliminarUser = async (req, res)=>{
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
    

