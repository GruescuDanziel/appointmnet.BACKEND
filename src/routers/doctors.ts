import { Router } from 'express'
import { DoctorsService } from '../services/Doctors';

const doctorsRouter = Router();
const doctorsService = DoctorsService.getInstance();

doctorsRouter
    .route('/')
    .get(async (req, res, next) => {
        res.send(await doctorsService.getAllDoctors())
    })
    .post(async (req, res, next) => {
        const result = await doctorsService.createDoctor(req.body)
        res.send(result)
    })

doctorsRouter
    .route('/:id')
    .get(async (req, res, next) => {
        res.send(await doctorsService.getDoctorById(req.params.id))
    })
    .delete(async (req, res, next) => {
        console.log(await doctorsService.deleteDoctor(req.params.id))
        res.send(200)
    })



export default doctorsRouter;
