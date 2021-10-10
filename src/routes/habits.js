const router = require('express-promise-router')()

const { habit } = require('../controllers')

router.route('/:id').get(habit.get)
router.route('/').post(habit.create)
router.route('/').get(habit.getAll)
router.route('/:id').put(habit.update)
router.route('/:id').delete(habit.delete)

module.exports = router