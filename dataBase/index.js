// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('project', 'root', 'root', {
//     host: 'localhost',
//     dialect: 'mysql'
//     });

const Sequalize = require('sequelize');
const fs = require('fs');
const {resolve} = require('path');

module.exports = (() => {
    let instance;

    function initConnection() {
        const client = new Sequalize('project', 'root', 'root', {
            host: 'localhost',
            dialect: 'mysql'
        });
        let models = {};

        function getModels() {
            fs.readdir('./dataBase/models', (err, files) => {
                files.forEach(file => {
                    const [modelName] = file.split('.');
                    models[modelName] = client.import(resolve(`./dataBase/models/${modelName}`))
                });
            });
        }

        return {
            getModel: modelName => models[modelName],
            setModels: () => getModels()
        };
    }

    return {
        getInstance: () => {
            if (!instance) instance = initConnection();
            return instance;
        }
    }
})();

// sequalize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });
