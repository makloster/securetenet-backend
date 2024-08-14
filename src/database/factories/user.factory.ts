import { setSeederFactory } from 'typeorm-extension'
import { User } from 'src/users/user.entity'

export default setSeederFactory(User, (faker) => {
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

    return user
})
