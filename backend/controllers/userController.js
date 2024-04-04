
const userModel = require('../models/userModel');

module.exports = {
    getAllUsers: (req, res) => {
        userModel.getAll((error, users) => {
            if (error) {
                console.error("Error al obtener usuarios: ", error);
                res.status(500).send("Error interno del servidor");
                return;
            }
            res.json(users);
        });
    }
};