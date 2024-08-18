/*
1)Explain the nodejs event driven architecture.
--> we run the dot js file and start script and parse th code , registe variables and functions means it will read the code 
    goes to event loop and it will keep on running as long as thre ia a event listener register.
    and its uses single threded js code so it works on single threaded.

2)How can it basically scale to handle 1000 of requests a sec. What helps node JS even though it is single threaded?
-->Node.js can handle thousands of requests per second, even though it is single-threaded, due to its efficient event-driven architecture and non-blocking I/O model

3)What does process.exit do?
--> method in Node.js is used to immediately terminate the Node.js process. When you call process.exit(), it stops the event loop, closes all remaining connections, and exits the process.

4)What does req.url , req.header and req.method contain?
-->  
req.url:-The URL of the incoming request, including the path and query string
req.header :- An object representing the headers sent by the client as part of the request
 req.method:-The HTTP method used in the request (e.g., GET, POST, PUT, DELETE).

*/

const http = require('http');

const server = http.createServer((req, res) => {
    // Get the requested URL
    const url = req.url;

    // Determine the response based on the URL
    let responseMessage;
    switch (url) {
        case '/home':
            responseMessage = 'Welcome home';
            break;
        case '/about':
            responseMessage = 'Welcome to About Us page';
            break;
        case '/node':
            responseMessage = 'Welcome to my Node Js project';
            break;
        default:
            responseMessage = 'Page not found';
            res.statusCode = 404;
            break;
    }

    // Set the content type and send the response
    res.setHeader('Content-Type', 'text/plain');
    res.end(responseMessage);
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
