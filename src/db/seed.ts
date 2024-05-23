import { eq } from "drizzle-orm";
import { db } from "./db";
import { InsertUser, userTable } from "./schema";

const users: InsertUser[] = [
    { id: "1", name: "Alice", username: "alice" },
    { id: "2", name: "Bob", username: "bob" },
    { id: "3", name: "Charlie", username: "charlie" },
];

async function seed() {

    await db.insert(userTable).values(users).execute();

}

seed().then(() => {
    console.log("Seed complete");
    process.exit(0);
}).catch((err) => {
    console.error(err);
    process.exit(1);
});