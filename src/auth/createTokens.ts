import { generateAccessToken, generateRefreshToken, generateInfo } from './generateTokens'
import { IUserInfo } from '../interface/IUser';
import { Token } from '../entities/EToken';

function createAccessToken(data: IUserInfo){
  return generateAccessToken(generateInfo(data));
};

async function createRefreshToken(data: IUserInfo){
  const refreshToken = generateRefreshToken(generateInfo(data));
  try {
    const createToken = new Token();
    createToken.token = refreshToken;

    await createToken.save();

    return refreshToken;
  } catch (error: any) {
    
    return {error: error.message};
  };
};

module.exports = { createAccessToken,  createRefreshToken }