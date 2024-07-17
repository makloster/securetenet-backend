import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

  createUser(user: CreateUserDto) {
    const newUser = this.userRepository.create(user)
    return this.userRepository.save(newUser)
  }

  getAllUsers() {
    return this.userRepository.find()
  }

  getUser(id: string) {
    return this.userRepository.findOne({
      where: {
        id
      }
    })
  }

  deleteUser(id: string) {
    return this.userRepository.delete({ id })
  }

  updateUser(id: string, user: UpdateUserDto) {
    return this.userRepository.update({ id }, user)
  }

}
