import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity({ name: 'favorite' })
export class Favorite {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  latex!: string;

  @Column('varchar', { length: 45 })
  title!: string;

  @ManyToOne(() => User, (user) => user.favorite, { onDelete: 'CASCADE' })
  user!: User;
}
