import UserRepository from "../repositories/index.js";

interface CreateUserDTO {
  nome: string;
  email: string;
  telefone: string;
}

class CreateUserService {

  async execute(data: CreateUserDTO) {

    const userAlreadyExists =
      await UserRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = await UserRepository.create({
      nome: data.nome,
      email: data.email,
      telefone: data.telefone
    });

    return user;
  }
}

export default new CreateUserService();