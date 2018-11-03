const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Data get as order'
    });
});

router.post('/', (req, res, next) => {
    const order = {
        profileId: req.body.profileId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'Data posted as order',
        order: order
    });
})

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'get by orderId',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req, res, next)=> {
    res.status(200).json({
        message: 'order Deleted',
        orderId: req.params.orderId
    });
})

module.exports = router;