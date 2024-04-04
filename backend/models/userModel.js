// userModel.js

const db = require('../database');

module.exports = {
    getAll: (callback) => {
        db.query('SELECT * FROM usuarios', (error, results) => {
            if (error) {
                callback(error, null);
                return;
            }
            callback(null, results);
        });
    },
    // Agrega más métodos de modelo según sea necesario
};
