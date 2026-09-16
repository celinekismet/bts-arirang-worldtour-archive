import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity.js';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(User)
    readonly userRepository: Repository<User>,
  ){}

  async findByEmailWithPassword(email: string) {
    return this.userRepository
    .createQueryBuilder('user')
    .addSelect('user.password')
    .where('user.email = :email', { email })
    .getOne();
  }

  async create(createUserDto: CreateUserDto): Promise<Omit<User, 'password'>> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
    const savedUser = await this.userRepository.save(user);
    const { password, ...result } = savedUser;
    return result;
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User | null>{
    return this.userRepository.findOneBy({ userId: id})
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<Omit<User, 'password'> | null> {
    const { password, ...userFields} = updateUserDto;

    const dataToUpdate: Partial<User> = { ...userFields};

    // on hash seulement si un nouvea pwd est fourni
    if (password) {
      dataToUpdate.password = await bcrypt.hash(password, 10);
    }

    await this.userRepository.update(id, dataToUpdate);

    const updatedUser = await this.findOne(id);

    if(!updatedUser) {
      return null;
    }

    // on retire le pwd du résultat final
    const { password: _, ...result} = updatedUser;
    return result;
  }

  remove(id: number): Promise<void> {
    return this.userRepository.delete(id).then(() => undefined);
  }
}
