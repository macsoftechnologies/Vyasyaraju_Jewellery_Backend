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
  export class Register {
  
    @Column()
    Email: string;
  
    @Column()
    PhoneNumber: string;

    @PrimaryGeneratedColumn('increment')
    UserID?: number;
  
    @Column()
    Password: string;
  
    @Column()
    ConfirmPassword: string;
  
}
  