import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

  async createUser(user: CreateUserDto) {
    const userFound = await this.userRepository.findOne({
      where: {
        fullName: user.fullName
      }
    })

    if (userFound) {
      return new HttpException('Un usuario con este nombre ya existe', HttpStatus.CONFLICT)
    }

    const newUser = this.userRepository.create(user)
    return this.userRepository.save(newUser)
  }

  getAllUsers() {
    return this.userRepository.find()
  }

  async getUser(id: string) {
    const userFound = await this.userRepository.findOne({
      where: {
        id
      }
    })

    if (!userFound) {
      return new HttpException('No se han encontrado usuarios con ese ID', HttpStatus.NOT_FOUND) //! Si la sintaxis no es de UUID tira status 500!
    }

    return userFound
  }

  async deleteUser(id: string) {
    const result = await this.userRepository.delete({ id })

    if (result.affected === 0) {
      return new HttpException('No se han encontrado usuarios con ese ID', HttpStatus.NOT_FOUND) //! Si la sintaxis no es de UUID tira status 500!
    }

    return result
  }

  async updateUser(id: string, user: UpdateUserDto) {
    const result = await this.userRepository.update({ id }, user)

    if (result.affected === 0) {
      return new HttpException('No se han encontrado usuarios con ese ID', HttpStatus.NOT_FOUND) //! Si la sintaxis no es de UUID tira status 500!
    }

    return result
  }
}
