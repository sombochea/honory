import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const userTable = sqliteTable('users', {
    id: text('id'),
    name: text('name'),
    username: text('username').notNull().unique(),
    textModifiers: text('text_modifiers').notNull().default(sql`CURRENT_TIMESTAMP`),
    intModifiers: integer('int_modifiers', { mode: 'boolean' }).notNull().default(false),
});

export type InsertUser = typeof userTable.$inferInsert
export type SelectUser = typeof userTable.$inferSelect