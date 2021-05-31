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
  export class Contact {
  
    @Column()
    Name: string;
  
    @Column()
    Email: string;

    @Column()
    Phone_Number:string;

    @Column()
   Message:string;

    @PrimaryGeneratedColumn('increment')
    ProductID?: number;
  
}
  