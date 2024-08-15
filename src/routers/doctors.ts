import { Router } from 'express'

const doctorsRouter = Router();

doctorsRouter
    .route('/')
    .get((req, res, next) => {
        res.send("All Doctors")
    })

doctorsRouter
    .route('/:id')
    .get((req, res, next) => {
        res.send(`Single Doctor With Id: ${req.params.id}`)
    })



export default doctorsRouter;
