exports.getHello = (req, res, next) => {
    res.status(200).send("Hello Express JS");
}

exports.getUser = (req, res, next) => {
    res.status(200).json({
        firstname: req.query.firstname,
        lastname: req.query.lastname
    });
}

exports.postUser = (req, res, next) => {
    res.status(201).json({
        firstname: req.params.firstname,
        lastname: req.params.lastname
    });
}