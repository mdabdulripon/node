const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'handling get request to /profiles'
    })
});

router.post('/', (req, res) => {
    res.status(200).json({
        message: 'handling post request to /profiles'
    })
});

// get profile ny id .....
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


module.exports = router;
