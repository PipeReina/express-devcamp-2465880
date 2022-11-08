const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config({
    path: './confi_env/config.env'
})
// console.log()
// console.log(process.env.DB_NAME)

//Defiir objeto sequelize de conexión 
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_MOTOR,
        port: process.env.DB_PORT
    }
)

module.exports = sequelize