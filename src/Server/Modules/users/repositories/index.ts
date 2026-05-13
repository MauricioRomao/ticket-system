import User from "../../../Shared/database/Models/user.js";
import { CreationAttributes } from "sequelize";

class UserRepository {

  async create(data: CreationAttributes<User>) {
    return await User.create(data);
  }

  async findByEmail(email: string) {
    return await User.findOne({
      where: { email }
    });
  }

  async getAll (){
    return await User.findAll()
  }

}

export default new UserRepository();