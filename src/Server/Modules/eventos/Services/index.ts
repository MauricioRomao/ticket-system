import EventRepository from "../repositories/EventRepository.js"; // Importa o repositório de eventos
import { CreateEventDTO } from "../Types/evento-create.js";

class CreateEventoService {
  async execute(data: CreateEventDTO) {
    const eventAlreadyExists = await EventRepository.findByTitleAndDate(
      data.titulo, 
      data.dataEvento
    );

    if (eventAlreadyExists) {
      throw new Error("Já existe um evento agendado com este título para esta data.");
    }

    const evento = await EventRepository.create({
      titulo: data.titulo,
      precoBancada: data.precoBancada,
      precoVIP: data.precoVIP,
      lotacaoMaxima: data.lotacaoMaxima,
      dataEvento: data.dataEvento
    });

    return evento;
  }

  async getAll() {
    const data = await EventRepository.getAll(); 
    return data;
  }
}

export default new CreateEventoService();
