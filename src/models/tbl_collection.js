module.exports = function (sequelize, DataTypes) {
    const TCollection = sequelize.define('tbl_collection', {
        id: {
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
            primaryKey: true,
        },
        stockId: {
            field: 'stock_id',
            type: DataTypes.STRING(40),
        },
        stockName: {
            field: 'stock_name',
            type: DataTypes.STRING(20),
        },
        stockMarket: {
            field: 'stock_market',
            type: DataTypes.STRING(10),
        },
        username: {
            type: DataTypes.STRING(40),
        },
        type: {
            type: DataTypes.STRING(11),
        },
        status: {
            type: DataTypes.INTEGER(1),
            defaultValue: 1,
        }
    }, {
        key: ['id'],
        timestamps: true,
        createdAt: 'createAt',
        updatedAt: 'updatedAt',
        tableName: 'tbl_collection',
        freezeTableName: true
    }
    );
    return TCollection;
}
