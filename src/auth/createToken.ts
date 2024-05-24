/* import { generateAccessToken, generateRefreshToken, generateInfo } from "./generateToken";
import { IUserSearch } from "../interface/IUser";

import tokenSchema from '../models/token'

interface CustomError {
  error: string
}

export const createAccessToken = async (data: IUserSearch): Promise<string> => {
  if (!data) {
    throw new Error('No se proporcionaron datos para crear el token de acceso');
  }
  return generateAccessToken(generateInfo(data));
};

export const createRefreshToken = async (data: IUserSearch): Promise<string | CustomError> => {
  const refreshToken = generateRefreshToken(generateInfo(data));
  try {
    const newToken = new tokenSchema({
      token: refreshToken
    })
    await newToken.save();
    return refreshToken;
  } catch (error: any) {
    const customError: CustomError = { error: error.message || 'Unknown error'}
    return customError
  };
}; */