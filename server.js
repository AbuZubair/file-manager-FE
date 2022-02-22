// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
/*compress Api request : optimization changes*/
const compression = require('compression');


// Get Environtment Variable

// If want to use .env file, need install dotenv from npm. and use below code
require('dotenv').config()

// Get our API routes
const app = express();

/*compress Api request-optimisation changes */
app.use(compression())

// Catch all other routes and return the index file
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '4300';
app.set('port', port);
/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`Server running on localhost:${port}`));
server.setTimeout(14400000);