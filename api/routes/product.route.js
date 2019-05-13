// CRUD code is in this file
const express = require('express'),
    app = express(),
    productRoute = express.Router();

// add the product model
let Product = require('../models/product');

// Add product to DB


productRoute.route("/add").post((req, res) => {
    let product = new Product(req.body);
    product.save().then(product => res.status(200).json({ 'product': product }))
        .catch(err => res.status(400).json({ 'error': err }));
}),
productRoute.route("/remove/:id").get((req, res) => {
    let response;
    Product.findByIdAndDelete(req.params.id, (err, res) => {
        if (err) console.log(err);
        else response = res;
    })
    res.json(response);
}),
productRoute.route("/get").get((req, res) => {
    Product.find((err, products) => {
        if (err) console.log('Could not Get');
        else res.json(products);
    });
}),
productRoute.route("/edit/:id").put((req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, (err, response) => {
        if (err) console.log(err);
        res.status(200).json(response);
    });
}),
productRoute.route("/:id").get((req, res) => {
    Product.findById(req.params.id, (err, response) => {
        if(err) res.status(400).json(err);
        else res.status(200).json(response);
    });
});
module.exports = productRoute;