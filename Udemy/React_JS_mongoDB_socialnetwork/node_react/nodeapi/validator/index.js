exports.createPostValidator = (req, res ,next) => {
    req.check('title', "Write a title").notEmpty()
    req.check('title', "Title must be between 4 to 150 characters").isLength({
        min: 4,
        max: 150
    });
    req.check('body', "Write a body").notEmpty()
    req.check('body', "body must be between 4 to 150 characters").isLength({
        min: 4,
        max: 2000
    });
    // check for errors
    const errors = req.validationErrors()
    // if error
    if(errors) {
        const firstError = errors.map((error) => error.msg)[0]
        return res.status(400).json({error: firstError});
    }

    //next middleware
    next();
};

exports.userSignupValidator = (req, res ,next) => {
    req.check('name', "name is required").notEmpty()
    req.check('name', "user must be between 4 to 20 characters").isLength({
        min: 4,
        max: 20
    });
    req.check('email', "email is required").notEmpty()
    .matches(/.+\@.+\..+/)
    .withMessage("Email need to be email")
    // check for errors
    req.check("password", "Password is required").notEmpty();
    req.check("password", "Password must contain at least 6 characters").isLength({
        min: 6
    })
    .matches(/\d/)
    .withMessage("Password must contain a number")

    const errors = req.validationErrors()
    // if error
    if(errors) {
        const firstError = errors.map((error) => error.msg)[0]
        return res.status(400).json({error: firstError});
    }

    //next middleware
    next();
};

