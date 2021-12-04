import express from 'express'
import { echo as echoController } from '../controllers/index.js'

const router = express.Router()
router.get('', echoController.getText)

export const echoRouter = router
