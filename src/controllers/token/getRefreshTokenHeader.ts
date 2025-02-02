import { IncomingHttpHeaders} from 'http'

const getTokenFromHeader = (headers: IncomingHttpHeaders) => {
  if(headers && headers.authorization){
    const parted = headers.authorization.split(' ');
    if(parted.length === 2){
      return parted[1];
    }else{
      return null;
    }
  }else{
    return null;
  }
}

export default getTokenFromHeader;