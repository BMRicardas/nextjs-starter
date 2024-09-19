import { migrate } from "drizzle-orm/postgres-js/migrator";

import config from "@/../drizzle.config";
import { env } from "@/env/server";

import { client, db } from ".";

if (!env.DB_MIGRATING) {
  throw new Error("❌ DB_MIGRATING is not set to true");
}

await migrate(db, { migrationsFolder: config.out! });

await client.end();
