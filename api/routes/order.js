const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        data: 'Data get as order'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        data: 'Data posted as order'
    });
})

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        data: 'get by orderId',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req, res, next)=> {
    res.status(200).json({
        data: 'order Deleted',
        orderId: req.params.orderId
    });
})

module.exports = router;