const express = require('express');
const cors = require('cors');
const useragent = require('express-useragent');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 9000;

// var corsOptions = {
//   origin: process.env.CLIENT_ORIGIN || "http://localhost:8081"
// };
var corsOptions = {
    origin: "*",
};

//**************************************************************************
//*[START] Application Services ********************************************
//*Description:
//*Application is running and which port is listening
//*
//************************************
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// Cross origin
app.use(cors(corsOptions));
// Put public folder to static
// app.use(express.static(path.join(__dirname, 'public')));
// Get client device info
app.use(useragent.express());
// adding Helmet to enhance your Rest API's security
app.use(helmet());
// adding morgan to log HTTP requests
app.use(morgan('combined'));

// routes
app.use('/api/tournament', require('./app/routes/tournament.routes'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
//*Not applicable
//*[END] Application Services *************************************************