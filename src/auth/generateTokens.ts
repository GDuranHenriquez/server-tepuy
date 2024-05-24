import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
import { IUserInfo } from '../interface/IUser';
dotenv.config()

const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;

function sign(payload: any, isAccessToken : boolean){
  if(!ACCESS_TOKEN_SECRET || !REFRESH_TOKEN_SECRET){
    throw new Error('no token provider')
  }
  return jwt.sign(payload, isAccessToken? ACCESS_TOKEN_SECRET:REFRESH_TOKEN_SECRET, {
    algorithm: "HS256",
    expiresIn: 180,
  })
};

export function generateAccessToken(user: IUserInfo){
  return sign({user}, true);
};

export function generateRefreshToken(user: IUserInfo){
  return sign({user}, false);
};

export function generateInfo(data: IUserInfo){
  const dataUser: IUserInfo = {
      id: data.id,
      firstName: data.firstName,
      email: data.email,
      rol: data.rol,
      status: data.status,
      img: data.img,
      lastName: data.lastName,
      userName: data.userName
  }
  return dataUser
};

