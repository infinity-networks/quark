import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Team } from './team';
import { File } from './file';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column()
  nickname: string;

  @Column({ select: false })
  password!: string;

  @OneToMany(() => File, file => file.id)
  files: File[];

  @ManyToMany(() => Team)
  @JoinTable()
  teams: Team[];
}