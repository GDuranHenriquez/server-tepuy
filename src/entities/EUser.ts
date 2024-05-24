import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"
import { v4 as uuidv4 } from 'uuid';
import { TipoRol, TipoStatus } from "../interface/IUser";


@Entity()
export class User extends BaseEntity {
  
  @PrimaryGeneratedColumn("uuid")
  id: string = uuidv4();

  @Column({
    length: 100,
    nullable: false
  })
  firstName: string;

  @Column({
    length: 100,
    nullable: false
  })
  lastName: string;
    
  @Column({
    length: 250,
    unique: true,
    nullable: false
  })
  userName: string;

  @Column({
    length: 250,
    unique: true,
    nullable: false
  })
  email: string;

  @Column("text", {
    nullable: false
  })
  password: string

  @Column({
    nullable: true,
    type: "text"
  })
  img: string | null

  @Column({
    type: "enum",            
    enum: TipoStatus,           
    default: TipoStatus.ACTIVE,
    nullable: false
  })
  status: TipoStatus;

  @Column({
    type: "enum",            
    enum: TipoRol,           
    default: TipoRol.USUARIO,
    nullable: false
  })
  rol: TipoRol;
   
}