 const express = require('express');
 const {crearUsers,
        traerUsersId,
        traerUsers,
        actualizarUsers,
        borrarUsers
        } = require('../controllers/UserControllers');
 const router = express.Router();

// rutas de usuario 
router.route('/')
            .get(traerUsers)
            .post(crearUsers)
router.route('/:id')
            .get(traerUsersId)
            .put(actualizarUsers)
            .delete(borrarUsers)

module.exports = router