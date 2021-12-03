const { json } = require("express");
const fs = require('fs');
const { resolve } = require("path");

let messages = [];
let globalId = 0;


module.exports = {
    create: (req, res) => {
        const { text, time } = req.body;
        messages.push({ globalId, text, time });
        globalId++;
        res.status(200).send(messages);
    }, 
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        const { text } = req.body;
        const updatedId = req.params.globalId
        const messagesIndex = messages.findIndex(message => message.globalId == updatedId);
        let message = messages[messagesIndex];

        messages[messagesIndex] = {
            id: message.globalId,
            text: message.text,
            time: message.time
        };

        res.status(200).send(messages)
    },
    delete: (req, res) => {
        const deleteId =  req.params.globalId;
        const messagesIndex = messages.findIndex(message => message.globalId == deleteId);
        messages.splice(messagesIndex, 1);
        res.status(200).send(messages);
    }
};