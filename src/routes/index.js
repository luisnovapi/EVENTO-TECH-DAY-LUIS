import express from 'express'
import routerCharlas from './charlas'
import routerExpositors from './expositors'

var router = express.Router()

router.use('/charlas', routerCharlas)
router.use('/expositors', routerExpositors)

export default router





