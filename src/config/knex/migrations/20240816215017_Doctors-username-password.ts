import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable("Doctors", function (table) {
        table.string("username").unique()
        table.string("password")
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable("Doctors", function (table) {
        table.dropColumn("username")
        table.dropColumn("password")
    })

}

