const express = require('express');
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling get request to /profiles'
    })
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'handling post request to /profiles'
    })
});

// get profile by id .....
router.get('/:name', (req, res, next) => {
    // const name = req.params.name.replace(/[^a-zA-Z ]/g, '').toLowerCase().replace(/\s+/g, '-');
    if (name === 'name') {
        res.status(200).json({
            data: 'you get the profile by name...',
            name: name
        });
    } else {
        res.status(300).json({
            err: 'name is not found...',
            name: name
        })
    }
});

router.patch('/:name', (req, res, next) => {
    res.status(200).json({
        message: `update the profile`
    })
});

router.delete('/:name', (req, res, next) => {
    res.status(200).json({
        message: `delete the profile`
    })
});

module.exports = router;
