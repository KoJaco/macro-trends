// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

import type { Config } from "drizzle-kit";

export default {
    out: "./drizzle",
    schema: "./drizzle/schema.ts",
    dialect: "turso",
    dbCredentials: {
        url: process.env.TURSO_DATABASE_URL || "",
        authToken: process.env.TURSO_AUTH_TOKEN,
    },
} satisfies Config;
