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
    export class displayImages {
  
    @Column()
    displayImage: string;
  
   @PrimaryGeneratedColumn('increment')
    ImageID?: number;
  
}
  