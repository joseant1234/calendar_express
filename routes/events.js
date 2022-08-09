/*
    Event Routes
    /api/events
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { isDate } = require('../helpers/is-date');
const { validateFields } =require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');

const router = Router();
// cualquier peticion debajo usará el middleware validateJWT
router.use(validateJWT);

router.get('/', getEvents);

router.post(
    '/',
    [
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validateFields,
    ],
    createEvent
);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);

module.exports = router;
