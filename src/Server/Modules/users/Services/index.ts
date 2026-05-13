import UserRepository from "../repositories/index.js";
import {CreateUserDTO}  from "../Types/user-create.js"


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
 async getAll() {
  const data = await UserRepository.getAll(); 
  return data;
}

}

  

export default new CreateUserService();
