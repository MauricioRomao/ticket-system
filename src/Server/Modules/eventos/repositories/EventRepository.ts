import Event from "../../../Shared/database/Models/Eventos.js"; // Ajuste o caminho para o seu Modelo Event
import { CreationAttributes } from "sequelize";

class EventRepository {

  async create(data: CreationAttributes<Event>) {
    return await Event.create(data);
  }

  async findByTitleAndDate(titulo: string, dataEvento: Date) {
    return await Event.findOne({
      where: { 
        titulo,
        dataEvento 
      }
    });
  }

  async getAll() {
    return await Event.findAll();
  }

}

export default new EventRepository();
