const fs = require('fs')

const routes = require('express').Router()
const data = require('../helpers/person.json')

routes.get('/', (req, res) => {
    return res.json({
        success: true,
        message: "All user data",
        result: data
    })
})

routes.get('/:id', (req, res) => {
    const {
        id
    } = req.params
    console.log(data.users[req.params.id - 1]);
    if (!data.users[req.params.id - 1]) {
        return res.json({
            success: false,
            message: "No user found"
        })
    }
    return res.json({
        success: true,
        message: "All user data",
        result: data.users[id - 1]
    })
})

routes.post('/', (req, res) => {
    const {
        id,
        name,
        age,
        address
    } = req.body;
    if (!id) {
        return res.json({
            success: false,
            message: "Please add user id"
        })
    }
    if (!name) {
        return res.json({
            success: false,
            message: "Please add user name"
        })
    }
    if (!age) {
        return res.json({
            success: false,
            message: "Please add user age"
        })
    }
    if (!address) {
        return res.json({
            success: false,
            message: "Please add user address"
        })
    }
    fs.readFile('./src/helpers/person.json', 'utf8', function (err, data) {
        if (err) throw err;
        let obj = JSON.parse(data);
        let result = obj.users.push(req.body);
        fs.writeFile('./src/helpers/person.json', JSON.stringify(obj, null, 2), err => {
            if (err) throw err;
            console.log(obj);
            res.send(obj);
        })
        return res.json({
            success: true,
            message: "Successfully added new user",
            hasil: result
        })
    })
})

routes.delete('/', (req, res) => {
    const {
        id
    } = req.params;
    if (!data.users[req.params.id - 1]) {
        return res.json({
            success: false,
            message: "No user found"
        })
    }
    fs.readFile('./src/helpers/person.json', 'utf8', function (err, data) {
        if (err) throw err;
        fs.writeFile('./src/helpers/person.json', JSON.stringify(obj, null, 2), err => {
            if (err) throw err;
            console.log(obj);
            res.send(obj);
        })
        return res.json({
            success: true,
            message: "Successfully added new user",
            hasil: result
        })
    })
})

module.exports = routes