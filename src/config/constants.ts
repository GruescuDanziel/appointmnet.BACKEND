const DOCTORS_ENDPOINT = "/doctors";
const PATIENTS_ENDPOINT = "/patients"
const APPOINTMENTS_ENDPOINT = "/appointments"

const SALT_ROUNDS = 10
const FORBIDEN_CHARS = "(){}[]|`¬¦! \"£$%^&*\"<>:;#~_-+=,@"

const TABLE_NAMES = {
    Doctors: "Doctors"
}


export {DOCTORS_ENDPOINT, PATIENTS_ENDPOINT, APPOINTMENTS_ENDPOINT, TABLE_NAMES, SALT_ROUNDS, FORBIDEN_CHARS}
