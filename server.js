const http = require ('http');     // This will load the HTTP module from Node, to create a web server
const fs = require ('fs');        // This will load the File System module from Node, so that we can read the HTML files
const url = require ('url');     // This will load the URL module from Node, this will extract the URL from the server 



http.createServer ((request, response) => {     // Creates a new HTTP Server. (We created this server in order to retrieve a URL) 
                                                /*  Request is a parameter used to recieve the URL. 
                                                    Response is a parameter that will send information to the client. */

    const parsedUrl = url.parse (request.url, true);     // Parse will recieve the entire URL, and store it inside the parsedUrl Variable 
    const pathname = parsedUrl.pathname.toLowerCase();  // This will make the entire pathname of the full URL lowercase 

    const logLine = `${request.url} - ${new Date().toISOString()}/n`;     // When a client sends a request to the server, this exact time will be timestamped and converted into a string 

    fs.appendFile ('log.txt', logLine, (err) => {     // We will store the timestamp of the client request inside the log.txt file 
        if (err) {     // We are setting up what will happen ff an error occurs
            console.error ('Failed to write to log.txt');     // If an error occurs, such as log.txt file not being present, this text will be displayed for the client 
        }
    });


    let filePath = './index.html';     // We are storing the path (./) to get to the file index.html inside the filePath Variable 


    if (pathname.includes ('documentation')) {     // If the URL includes thw word "documentation" ... 
        filePath = './documentation.html';        // ...then we will serve the file path name as "documentation.html" instead
    }


    fs.readFile (filePath, (err, data) => {     // This will read the HTML file documentation.html
        if (err) {
            response.writeHead (404, { 'Content-type': 'text/plain' });     // We are creating the format for the error message 
            response.end ('404 - File Not Found');     // If there is an error, this message will be displayed to the user
        } else {
            response.writeHead (200, { 'Content-Type': 'text/html' });     // We are creating the format for the request successful message 
            response.end (data);     // Sending the data from the HTML file documentation.html to the client 
        }

    })
}).listen (8080);     // This is the Port Number, requests from the client sent throguh the API will be sent using the Port Number 8080




