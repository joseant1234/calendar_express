const { response } = require('express');
const Event = require('../models/Event');

const getEvents = async(req, res = response) => {
    // con el populate trae la información del usuario a la referencia 'user'
    // para mas de un atributo: populate ('user', 'name password')
    const events = await Event.find().populate('user', 'name');

    res.json({
        ok: true,
        events,
    });
}

const createEvent = async(req, res = response) => {
    const event = new Event(req.body);
    try {
        event.user = req.uid;
        const savedEvent = await event.save();

        res.json({
            ok: true,
            event: savedEvent
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

}

const updateEvent = (req, res = response) => {
    res.json({
        ok: true
    });
}

const deleteEvent = (req, res = response) => {
    res.json({
        ok: true
    });
}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}
