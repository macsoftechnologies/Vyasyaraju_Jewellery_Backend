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
  export class Reviews {
  
    
    @Column()
    Rating: number;

    @Column()
    Nick_Name: string;
  
    @Column()
    Summary: string;

    
    @Column()
    Review: string;

    @PrimaryGeneratedColumn('increment')
    ReviewID?: number;
  
}
  