module.exports = function (sequelize, DataTypes) {
    const TInformation = sequelize.define('tbl_information', {
        id: {
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
            primaryKey: true,
        },
        stockId: {
            field: 'stock_id',
            type: DataTypes.STRING(40),
        },
        title: {
            type: DataTypes.STRING(40),
        },
        content: {
            type: DataTypes.STRING,
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
        tableName: 'tbl_information',
        freezeTableName: true
    }
);
    return TInformation;
}
