const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
// dependencias a las rutas
const bootcampRouters = require('./routes/BootcampsRoutes')

// establecer el archivo de confi (env tiene variables de entorno del proyecto no del sistema)
dotenv.config({
    path: './confi_env/confi.env'
})

// 1 crear el objeto aplicacion 
const app = express()

app.use('/api/v1/bootcamps' ,bootcampRouters )

//3 ejecutar servidor de desarrollo de express

app.listen(process.env.PORT,()=>{
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT}`.rainbow)
})