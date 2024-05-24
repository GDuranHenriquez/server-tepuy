/* import getTokenFromHeader from "../controllers/token/getRefreshTokenHeader";
import { verifyAccessToken } from "./verifyTokens";
import { Response, NextFunction } from "express";
import { IGetUserAuthInfoRequest } from "../utils/typesRequestExpress";

const authenticate = (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
  try {
    const token = getTokenFromHeader(req.headers);
    if(token){
      const decoded = verifyAccessToken(token);
      if(decoded){
        req.user = {...decoded.user};
        next();
        return true  
      }else{
        return res.status(401).json({error: 'No token provided'});
      }
    }else{
      return res.status(401).json({error: 'No token provided'});
    }
  } catch (error) {
    return res.status(401).json({error: error});
  }

};

export default authenticate */