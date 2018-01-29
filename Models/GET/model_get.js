 'use strict'
const connection_mysql = require('../../Config/config_mysql')
const uuidv4 = require('uuid/v4')
exports.handleQueryProducts = (request, callback) => {
    const queryStatment = 'SELECT id, name, image, price, colors, condition_string as conditions, description FROM products WHERE 1' 
    connection_mysql.connection.query(queryStatment, (errorDB, resultsDB, fieldsDB) => {
        if (errorDB) {
            throw errorDB
            console.log('ERROR ', errorDB)
            callback(true, '')
        } else {
            callback(false, resultsDB)
        } 
    });
}
