export interface IUser{
  id: string,  
  firstName: string, 
  lastName: string, 
  userName: string, 
  email: string, 
  password: string, 
  img: string
  rol: string,
  status: string
}

export interface IUserInfo{
  id: string,  
  firstName: string, 
  lastName: string, 
  userName: string, 
  email: string, 
  img: string,
  rol: string,
  status: string
}

export interface IUserSearch{
  id: string,  
  firstName: string, 
  lastName: string, 
  userName: string, 
  email: string, 
  password: string, 
  img: string
  rol: string,
  status: string
}
export interface IUsercreate{  
  firstName: string, 
  lastName: string, 
  userName: string, 
  email: string, 
  password: string, 
  img: string | null,
}

export enum TipoRol {
  ADMIN = 'admin',
  USUARIO = 'usuario',
  INVITADO = 'invitado',
}

export enum TipoStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}