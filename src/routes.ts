import  express  from 'express'
import candidatesController from './controllers/candidatescontroller'
import { companiesController } from './controllers/companies-controller'

const router = express.Router()


router.get('/candidates', candidatesController.index)
router.post('/candidates', candidatesController.save)
router.get('/candidates/:id', candidatesController.show)
router.put('/candidates/:id', candidatesController.update)
router.delete('/candidates/:id', candidatesController.delete)

router.get('/companies', companiesController.index)


export {router}