module.exports = (sequelize, DataTypes) => {
    const feedback = sequelize.define('feedback', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
        },
        comment: {
            type: DataTypes.STRING
        },
        userId: {
            type: DataTypes.STRING
        },
    }, {
        tableName: 'feedback',
        timestamps: false
    });
    return feedback
};
