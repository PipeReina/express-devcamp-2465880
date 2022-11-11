 const express = require('express');
 const {crearReviews,
        traerReviewsId,
        traerReviews,
        actualizarReviews,
        borrarReviews
        } = require('../controllers/ReviewsControllers');
 const router = express.Router();

// rutas de usuario 
router.route('/')
            .get(traerReviews)
            .post(crearReviews)
router.route('/:id')
            .get(traerReviewsId)
            .put(actualizarReviews)
            .delete(borrarReviews)

module.exports = router