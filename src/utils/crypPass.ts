import bcrypt from 'bcrypt'
import * as dotenv from 'dotenv'
dotenv.config()


const { CRSALT } = process.env;

async function encrypPass(pass : string){

  if(CRSALT){
    const salt = parseInt(CRSALT)
    let passEncrypt = await bcrypt.hash(pass, salt);
    return passEncrypt;
  }

  throw new Error('no salt provide')
};

module.exports = { encrypPass };