const USER = (Sequelize, DataTypes) => {
    //table이름,테이블 속성,모델옵션
    return Sequelize.define(
        "user",
        {
            id : {
                type : DataTypes.STRING(10),
                allowNull : false,
                primaryKey : true,
            },
            pw : {
                type : DataTypes.STRING(20),
                allowNull : false,
            },
            name : {
                type : DataTypes.STRING(5),
                allowNull : false,
            },
            birthday : {
                type : DataTypes.DATE,
                allowNull : false,
            },
            age : {
                type : DataTypes.INTEGER,
                allowNull : false,
            },

        },
        {
            tableName : "user",
            freezeTableName : true,
            timestamps : false // default = true
            //collate,charset등등이 있다
        }
    );
}

module.exports = USER;
