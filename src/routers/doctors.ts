import { Router } from 'express'
import { DoctorsService } from '../services/Doctors';

const doctorsRouter = Router();
const doctorsService = DoctorsService.getInstance();

doctorsRouter
    .route('/')
    .get(async (req, res, next) => {
        res.send(await doctorsService.getAllDoctors())
    })

doctorsRouter
    .route('/:id')
    .get(async (req, res, next) => {
        res.send(await doctorsService.getDoctorById(req.params.id))
    })



export default doctorsRouter;
