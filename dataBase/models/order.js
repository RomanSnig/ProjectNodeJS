module.exports = (sequelize, DataTypes) => {
    const order = sequelize.define('orders', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user: {
            type: DataTypes.INTEGER
        },
        list: [{
            name: {
                type: DataTypes.STRING
            },
            quantity: {
                type: DataTypes.INTEGER
            },
            price: {
                type: DataTypes.INTEGER
            }
        }],
        accommodation: [{
            name: {
                type: DataTypes.STRING
            },
            phoneNumber: {
                type: DataTypes.INTEGER
            },
            street: {
                type: DataTypes.STRING
            },
            streetNumber: {
                type: DataTypes.INTEGER
            },
            entrance: {
                type: DataTypes.INTEGER
            },
            flat: {
                type: DataTypes.INTEGER
            },
            apartment: {
                type: DataTypes.INTEGER
            }
        }],
        totalPrice: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'orders',
        timestamps: false
    });
    return order
};
