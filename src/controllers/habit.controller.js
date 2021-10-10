const genericCrud = require('./generic.controller')
const { Habit } = require('../model')

module.exports = {
    ...genericCrud(Habit),
}