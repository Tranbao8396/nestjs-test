import { Injectable, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async getUsers(): Promise<Users[]> {
    return await this.usersRepository.find();
  }

  async getUser(UserName: string): Promise<Users | null> {
    const name = String(UserName);
    const user = await this.usersRepository.findOneBy({ name });
    if (!user) {
      throw new HttpException('Users does not exist', 404);
    } else {
      return user;
    }
  }

  async checkUser(user: any): Promise<any> {
    const name = user.name;
    const userdata = await this.usersRepository.findOneBy({ name });

    if (!userdata) {
      throw new HttpException('Users does not exist or correct', 404);
    } else {
      const password = userdata.password;
      if (password === user.password) {
        return userdata;
      } else {
        throw new HttpException('Users pass does not correct', 404);
      }
    }
  }

  async addUser(user: any): Promise<any> {
    const add = await this.usersRepository.save(user);
    if (add) {
      return add;
    } else {
      throw new HttpException('cannot add', 404);
    }
  }

  async deleteUser(userId: number): Promise<void> {
    const id = Number(userId);
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new HttpException('User does not exist', 404);
    } else {
      await this.usersRepository.delete(id);
    }
  }
}
