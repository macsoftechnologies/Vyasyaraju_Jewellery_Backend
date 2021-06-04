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
  export class Subscribe  {
  
    @Column()
    Email: string;
  
    @PrimaryGeneratedColumn('increment')
    UserID?: number;
  }
