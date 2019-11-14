module.exports = (sequelize, DataTypes) => {
    const pizza = sequelize.define('pizza', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        comment: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'pizza',
        timestamps: false
        });
    return pizza
};
