import { Seeder, SeederFactoryManager } from 'typeorm-extension'
import { DataSource } from 'typeorm'
import { User } from '../../users/user.entity'

export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {

    try {
    const userFactory = factoryManager.get(User)
    console.log('User.seed log 1:' + userFactory)

    const users = await userFactory.saveMany(5)
    console.log('-----> Seeding users...')

    return users
  } catch (error) {
    console.error('Failed to seed users:', error)
    throw error
  }
  }
}
