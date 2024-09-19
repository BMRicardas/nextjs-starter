import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

import { users } from "./users";

export const guestbookEntries = pgTable("guestbook_entries", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { mode: "date" })
    .notNull()
    .defaultNow()
    .defaultNow(),
});

export const InsertGuestbookEntrySchema = createInsertSchema(
  guestbookEntries
).omit({ userId: true, createdAt: true });
