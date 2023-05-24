import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Courses {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  slug: string;

  @Column()
  content: string;

  @Column()
  author: string;

  @Column()
  url: string;
}
