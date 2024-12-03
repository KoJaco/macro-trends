import { macroSummaries } from "../../../drizzle/schema";
import { db } from "../../../drizzle/db.server";
import { sql } from "drizzle-orm";

export async function getLatestSummary() {
    const result = await db
        .select()
        .from(macroSummaries)
        .orderBy(sql`${macroSummaries.createdAt} desc`);

    return result[0];
}
