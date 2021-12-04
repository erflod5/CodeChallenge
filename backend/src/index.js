import express from 'express'
import cors from 'cors'
import { echoRouter } from './routes/index.js'

const PORT = process.env.PORT || 3000
const app = express()

// Settings
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.set('port', PORT)

// Routes
app.use('/iecho', echoRouter)

app.listen(app.get('port'), () => {
  console.log(`App listening on port ${app.get('port')}`)
})

export default app
