import {
  AfterLoad,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

const tempPassword = Symbol('claveProvisoria')
/*
enum UserRole {
  ADMIN = 'Admin',
  OPERADOR = 'Operador',
  VISUALIZADOR = 'Visualizador'
}
enum Status {
  ACTIVO = 'Activo',
  NO_DISPNIBLE = 'No disponible',
  INACTIVO = 'Inactivo'
}
*/
@Entity({ name: 'usuarios' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'varchar', length: 70, nullable: false })
  fullName: string

  @Column({ type: 'varchar', length: 150, nullable: false })
  password: string

  @Column({ type: 'varchar', length: 100, unique: true, nullable: false })
  email: string

  @Column({ type: 'varchar', length: 20, nullable: true })
  verificationCode?: string

  @Column({ type: 'varchar', length: 20, nullable: true })
  resetPasswordCode?: string

  @Column({
    // type: "enum",
    // enum: UserRole,
    // default: UserRole.VISUALIZADOR
  })
  role: string // UserRole

  @Column({
    // type: "enum",
    // enum: Status,
    // default: Status.ACTIVO
  })
  status: string // Status

  @Column({ nullable: true })
  assignedTasks: string

  @Column({ type: 'boolean', default: false })
  isVerified: boolean

  @Column({ type: 'boolean', default: true })
  isActive: boolean

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date
}
