 const express = require('express');
 const {crearCourses,
        traerCoursesId,
        traerCourses,
        actualizarCourses,
        borrarCourses
        } = require('../controllers/CoursesControllers');
 const router = express.Router();

// rutas de usuario 
router.route('/')
            .get(traerCourses)
            .post(crearCourses)
router.route('/:id')
            .get(traerCoursesId)
            .put(actualizarCourses)
            .delete(borrarCourses)

module.exports = router