const { Schema, model } = require('mongoose');

const EventSchema = Schema({
    title: {
        type: String,
        required: true
    },
    notes: {
        type: String
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', //nombre del schema
        required: true
    }
});

// por defecto usa como serializador toJSON, se puede sobreescribir
EventSchema.method('toJSON', function() {
    // con this.toObject() es una referencia al objecto q se está serializando
    const { __v, _id, ...object } = this.toObject();
    object.id = _id
    return object;
})

module.exports = model('Event', EventSchema);
