import { eq } from "drizzle-orm";
import { db } from "./db";
import { InsertUser, userTable } from "./schema";

export const userRepo = {
    findAll: async () => {
        return await db.select().from(userTable).all()
    },

    create: async (user: InsertUser) => {
        return await db.insert(userTable).values(user).execute()
    },

    update: async (id: string, user: InsertUser) => {
        return await db.update(userTable).set(user).where(eq(userTable.id, id)).execute()
    },

    delete: async (id: string) => {
        return await db.delete(userTable).where(eq(userTable.id, id)).execute()
    },
}