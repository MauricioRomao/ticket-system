import { DataTypes, Model, InferAttributes, InferCreationAttributes } from "sequelize";
import { connection } from "../connection.js";

class Event extends Model<InferAttributes<Event>, InferCreationAttributes<Event>> {
    declare titulo: string;
    declare precoBancada: number;
    declare precoVIP: number;
    declare lotacaoMaxima: number;
    declare dataEvento: Date;
}

Event.init({
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precoBancada: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00
    },
    precoVIP: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00
    },
    lotacaoMaxima: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dataEvento: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize: connection,
    tableName: "eventos"
});

export default Event;
