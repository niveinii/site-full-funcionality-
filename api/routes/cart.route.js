// CRUD code is in this file
const express = require('express'),
    app = express(),
    cartRoute = express.Router(),
    jwt = require('jsonwebtoken');

let Order = require('./../models/order');

cartRoute.route('/add').post((req, res) => {
    let user = jwt.decode(req.body.token);
    let cart = new Order({cart: req.body, userID: user.payload._id});
    cart.save().then(order => res.status(200).json({ 'order': order }))
    .catch(err => res.status(400).json({ error: err }));
}),
cartRoute.route('/:id').get((req, res) => {
    Cart.findById(req.params.id, (err, response) => {
        if (err) res.status(400).json({error: err, message: "Could not find order"});
        else res.status(200).json({response: response, message: "Order exists"});
    })
});

module.exports = cartRoute;