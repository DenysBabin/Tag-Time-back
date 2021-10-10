const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    category: [
        {
            type: ObjectId,
            ref: 'Habit'
        }
    ],
})

module.exports = model('Category', schema)