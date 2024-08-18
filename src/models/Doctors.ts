import { TABLE_NAMES } from "../config/constants";
import { knex } from "../config/knex/knex";

const Doctors = knex(TABLE_NAMES.Doctors)

export { Doctors }
