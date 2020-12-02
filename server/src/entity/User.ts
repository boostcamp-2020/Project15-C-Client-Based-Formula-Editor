import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Favorite } from './Favorite';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('varchar', { length: 45 })
  userId!: string;

  @Column('varchar', { length: 45 })
  nickName!: string;

  @Column()
  profileUrl!: string;

  @OneToMany(() => Favorite, (favorite) => favorite.user, {
    onDelete: 'CASCADE',
  })
  favorite!: Favorite[];
}
