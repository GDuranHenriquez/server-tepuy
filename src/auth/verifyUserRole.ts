import * as dotenv from 'dotenv'
dotenv.config()

const HOST_COMPANY = process.env.HOST_COMPANY? process.env.HOST_COMPANY: ''

const verifyUserRole = (email: string) : boolean => {
  const isAdmin =  HOST_COMPANY === '' ? false : email.includes(HOST_COMPANY)
  if(isAdmin){
    return true
  }else{
    return false
  }
}

export default verifyUserRole