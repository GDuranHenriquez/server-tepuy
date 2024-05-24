import { Request, Response } from "express";
import { User } from "../../entities/EUser";
import { IUsercreate } from "../../interface/IUser";
import verifyUserRole from "../../auth/verifyUserRole";

async function registerNewUser(req : Request, res: Response){
  try {

    const { firstName, lastName, userName, email, password, img } = req.body as IUsercreate;

    if(!firstName || !lastName || !userName || !email || !password){
      return res.status(400).json({error: 'Data incompletos para el resitro'})
    }

    const newUser = new User();
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.userName = userName;
    newUser.email = email;
    newUser.password = password;
    newUser.img = img;

    const createUser = await newUser.save();

    return res.status(200).json({data: createUser})
  } catch (error) {
    return res.status(500).json({error: error})
  }
}

export default registerNewUser;