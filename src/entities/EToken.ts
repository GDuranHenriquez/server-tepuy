import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm"
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Token extends BaseEntity {
  
  @PrimaryGeneratedColumn("uuid")
  id: string = uuidv4();
  
  @Column("text", {
    unique: true,
    nullable: false
  })
  token: string;

  @CreateDateColumn({
    nullable: false
  })
  createdAt: Date;

  @UpdateDateColumn({
      nullable: false
  })
  updatedAt: Date;

   
}