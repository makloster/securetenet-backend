import { Seeder, SeederFactoryManager } from 'typeorm-extension'
import { DataSource } from 'typeorm'
import { User } from 'src/users/user.entity'

export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<User[]> {
    const items: User[] = []

    try {
    const userFactory = factoryManager.get(User)
    items.push(...await userFactory.saveMany(5))
  } catch (error) {
    console.error('Failed to seed users:', error)
    throw error
  }

    return items
  }
}
