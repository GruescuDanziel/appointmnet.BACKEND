import bcrypt from 'bcrypt'
import { FORBIDEN_CHARS, SALT_ROUNDS } from '../config/constants'

export const hashPassowrd = async (password: string) => {
    return bcrypt.hash(password, SALT_ROUNDS)
}

const stringDoesNotIncludeSpecials = (stringToCheck: string): boolean  =>{
    for(const char of FORBIDEN_CHARS){
        if(stringToCheck.includes(char)){
            return false
        }
    }
    return true
}

export const isStringNonEmpty = (stringToCheck: string | null | undefined): boolean => {

    return stringToCheck !== undefined && stringToCheck !== null && stringToCheck.length !== 0 && stringDoesNotIncludeSpecials(stringToCheck)
}
