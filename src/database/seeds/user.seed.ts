import { Seeder, SeederFactoryManager, runSeeders } from 'typeorm-extension'
import { DataSource } from 'typeorm'
import { User } from '../../users/user.entity'
import { dsOptions } from '../data-source'


export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {

    try {
      const userFactory = factoryManager.get(User)

      console.log('\n-----> Seeding users...\n')
      const users = await userFactory.saveMany(5)
      console.log('\n-----> Users successfully seeded!\n')

      return users
    } catch (error) {
      console.error('Failed to seed users:', error)
      throw error
    }
  }
}

export const dataSource = new DataSource(dsOptions)
dataSource.initialize().then(async () => {
  await runSeeders(dataSource)
  process.exit()
})
