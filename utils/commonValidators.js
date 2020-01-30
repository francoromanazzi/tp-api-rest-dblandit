const { validationResult } = require('express-validator');

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

module.exports = { checkValidationResult }