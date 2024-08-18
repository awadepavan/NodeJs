/*
1)Explain how does the internet work in your own words.
-->  we make a request to browser and it will response to our request

2)What are the core modules of node js?
--> 1.Http
    2.Https
    3.fs
    4.path
    5.os

3)Explain the use of each one of them in detail.
-->1.Http :- allows you to create an HTTP server and handle HTTP requests and responses
    2.Https :- module is similar to the http module but adds support for Secure HTTP (HTTPS)
    3.fs :-module provides an API for interacting with the file system on your server
    4.path:-module provides utilities for working with file and directory paths.
    5.os:- module provides operating system-related utility methods and properties.

4)What are relative path and absolute path? How to define them?
-->  absolute path:- full path from the root directory to the target file or directory

        Means it will provide exaxt location of the file we wanted thats why we call it absolute path
     
    relative path :-  specifies a file or directory's location in relation to the current directory
        
        it is shorter and flexiable than absolut path . it will change accoring to the requirement
        thats why we called relative path

What does createServer do?

--> it will use to crete a new http server

What are anonymous functions?
--> the function are created without name and these function used for short, one time use because 
        there is no need for naming .
What do you think server.listens exactly do?Why do we need it?

---> Server listen the request made by the user and work on that request and provide a response for that

*/

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);

});

server.listen(3000);
