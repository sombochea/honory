import { Hono } from 'hono'
import { userRepo } from './db/repo'
import { InsertUser } from './db/schema'

const app = new Hono()

app.get('/', (c) => {
  return c.json({ status: 'ok' })
})

app.route('/users')
  .get(async (c) => {
    const users = await userRepo.findAll()
    return c.json(users)
  })
  .post(async (c) => {
    const user = await c.req.json() as InsertUser
    await userRepo.create(user)
    return c.json(user)
  })
  .put(':id', async (c) => {
    const user = await c.req.json() as InsertUser
    await userRepo.update(c.req.param('id'), user)
    return c.json(user)
  })
  .delete(':id', async (c) => {
    await userRepo.delete(c.req.param('id'))
    return c.json({ status: 'ok' })
  })

export default app
