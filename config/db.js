const sequelize = require('./seq')
const colors = require('colors')
//dependencia a la funcion para crear el modelo 
const UserModel = require('../models/user')
//dependencia de DataTypes
const { DataTypes } = require('sequelize')
// crear el modelo
const User = UserModel(sequelize, DataTypes)

// crear funcion asymcrona pra conexion
const connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('Conexión Exitosa')
        //seleccionar los Users
        // const users = await User.findAll();
        // console.log(users)
        //crear usuarios
        const pipe = await User.create({
            name: "Pepe",
            email: "pepe@misena.edu.co",
            password: "3459"
            });
            console.log("El nuevo dato es de ID:", pipe.id);

    } catch (error) {
        console.error(error)
    }

    //ejecutar la conexion 
}
connectDB()