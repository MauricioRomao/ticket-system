import { DataTypes, Model, InferAttributes, InferCreationAttributes } from "sequelize";
import { connection } from "../connection.js";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare nome: string;
    declare email: string;
    declare telefone: string;
}

User.init({
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: connection,
    tableName: "usuarios"
});

export default User;