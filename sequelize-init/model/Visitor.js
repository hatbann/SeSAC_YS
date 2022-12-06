const Visitor = (Sequelize, DataTypes) => {
    //table이름,테이블 속성,모델옵션
    return Sequelize.define(
        "visitor",
        {
            id : {
                type : DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                autoIncrement: true
            },
            name:{
                type : DataTypes.STRING(5),
            },
            comment : {
                type : DataTypes.TEXT('medium'),
            }
        },
        {
            tableName : "visitor",
            freezeTableName : true,
            timestamps : false // default = true
            //collate,charset등등이 있다
        }
    );
}

module.exports = Visitor;
