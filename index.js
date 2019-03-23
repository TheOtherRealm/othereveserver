/**
 * Copyright (C) 2019 Aaron E-J
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the latest version of the GNU Affero General Public License as published by
 * the Free Software Foundation, or at least version 3.
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
const express = require('express');
const helmet = require('helmet');
const https = require('https');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require("./api-routes")
// Initialize the app
const app = express();
app.use(helmet())
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/othereve', { useNewUrlParser: true });
var db = mongoose.connection;
// Setup server port
var port =  8888;
// Send message for default URL
app.get('/', (req, res) => res.send('Welcome to Other Eve! <a href="./api/">Here is the link to the API</a>'));
// Use Api routes in the App
app.use('/api', apiRoutes)
// Launch app to listen to specified port
app.listen(port, function () {
	var server = https.createServer(this);
	return server.listen.apply(server, {port,app});
});