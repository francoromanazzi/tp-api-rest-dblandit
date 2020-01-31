const { param, validationResult } = require('express-validator');

const idEsMongoId = [
    param('id').isMongoId().withMessage('id debe ser un mongoId')
]

const checkValidationResult = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            code: 10,
            message: errors.array()
        })
    } else {
        next()
    }
}

module.exports = { idEsMongoId, checkValidationResult }