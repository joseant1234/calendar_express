const { response } = require('express');

const getEvents = (req, res = response) => {
    res.json({
        ok: true
    });
}

const createEvent = (req, res = response) => {
    res.json({
        ok: true
    });
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
