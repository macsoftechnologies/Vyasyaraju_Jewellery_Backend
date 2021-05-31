import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity()
  export class Queries {
  
    @Column()
    Name: string;
  
    @Column()
    Question: string;

    @PrimaryGeneratedColumn('increment')
    QueryID?: number;
  
}
  