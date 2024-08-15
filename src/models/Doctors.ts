import { TABLE_NAMES } from "../config/constants";
import { knex } from "../config/knex/knex";

//@ts-ignore
interface DoctorsI {
    id: number;
    firstName: string;
    lastName: string;
}

const Doctors = knex(TABLE_NAMES.Doctors)


export { Doctors }
