const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
cors = require('cors'),
config = require('./DB'),
productRoute = require('./routes/product.route'),
userRoute = require('./routes/user.route'),
orderRoute = require('./routes/cart.route');





// Connection to MongoDB 
mongoose.connect(config.DB, {useNewUrlParser: true}).then(
    () => {console.log('Database connected!');},
    err => {console.log('Failed to connect to database ' + err);}
);


// using express.js for our application
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/product', productRoute);
app.use('/user', userRoute);
app.use('/order', orderRoute);
let port = process.env.PORT || 4000;
const server = app.listen(port, function(){
    console.log('Listening on port: ' + port);
});