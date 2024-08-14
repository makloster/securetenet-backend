import { setSeederFactory } from 'typeorm-extension'
import { User } from '../../users/user.entity'
import { Faker } from '@faker-js/faker'

let counter = 0

export const UserFactory = setSeederFactory (User, (faker:Faker) => {
    const user = new User()

    user.fullName = faker.person.fullName()
    user.password = 'Password123'
    user.email = `${user.fullName}@example.com`
    user.role = 'Visualizador'
    user.status = 'Activo'
    user.assignedTasks = null
    user.isVerified = true
    user.isActive = true
    user.createdAt = new Date
    user.updatedAt = new Date

    counter++
    console.log(`[User.factory log] Seeding user ${counter} ${user.fullName}`)
    
    return user
})
