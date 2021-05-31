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
  export class Products {
  
    @Column()
    Product_Name: string;
  
    @Column()
    Product_Price: string;

    @Column()
    Product_Description:string;

    @PrimaryGeneratedColumn('increment')
    ProductID?: number;
  
}
  