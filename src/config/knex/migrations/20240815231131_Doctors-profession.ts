import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable("Doctors", function (table) {
        table.string("profession")
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable("Doctors", function (table) {
        table.dropColumn("profession")
    })
}

