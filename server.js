const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const listEndpoints = require('express-list-endpoints')


// dependencias a las rutas
const bootcampRouters = require('./routes/BootcampsRoutes')
const userRouters = require('./routes/UsersRoutes')

// establecer el archivo de confi (env tiene variables de entorno del proyecto no del sistema)
dotenv.config({
    path: './confi_env/confi.env'
})

// 1 crear el objeto aplicacion 
const app = express()
app.use(express.json())

//dependencia a la conexion db 
const connectDB = require('./config/db')

app.use('/api/v1/bootcamps' ,bootcampRouters )
app.use('/api/v1/users' ,userRouters )

console.log(listEndpoints(app))

//3 ejecutar servidor de desarrollo de express

app.listen(process.env.PORT,()=>{
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT}`.rainbow)
})