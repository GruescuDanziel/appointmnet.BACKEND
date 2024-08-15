import express from 'express';
import {doctorsRouter, patientsRouter, appointmentsRouter} from './routers';
import { APPOINTMENTS_ENDPOINT, DOCTORS_ENDPOINT, PATIENTS_ENDPOINT } from './config/constants';


const app = express();
const port: number = Number(process.env.port ?? 8080);

app.use(DOCTORS_ENDPOINT, doctorsRouter);
app.use(PATIENTS_ENDPOINT, patientsRouter);
app.use(APPOINTMENTS_ENDPOINT, appointmentsRouter);

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
