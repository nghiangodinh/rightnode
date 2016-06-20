"use strict";

const
    SERVER_PORT = 5432,
    net = require('net'),
    client = net.connect({port: SERVER_PORT});
    
    client.on('data', function(data) {
        let message = JSON.parse(data);

        if (message.type === 'watching') {
            console.log("Now watching: " + message.file);
        } else if (message.type === 'changed') {
            let date = new Date(message.timestamp);
            console.log("File '" + message.file + "' changed at " + date);
        } else {
            throw Error("Unrecognized message type: " + message.type);
        }
    });