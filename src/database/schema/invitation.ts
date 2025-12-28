import { createId } from '@paralleldrive/cuid2'
import { relations } from 'drizzle-orm'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { user } from './auth'

export const invitation = sqliteTable('invitation', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  title: text('title').notNull(),
  description: text('description'),
  date: text('date').notNull(),
  time: text('time').notNull(),
  address: text('address').notNull(),
  occasionType: text('occasion_type').notNull(),
  userId: text('user_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
})

export const invitationRelations = relations(invitation, ({ one }) => ({
  user: one(user, {
    fields: [invitation.userId],
    references: [user.id],
  }),
}))
