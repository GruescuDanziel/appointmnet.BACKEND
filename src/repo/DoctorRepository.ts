import { DoctorCreateDTO } from "../dtos/DoctorCreateDTO";
import { Doctors } from "../models/Doctors";

export class DoctorsRepository {
    private static DoctorsRepositoryInstance: DoctorsRepository;

    private constructor() { };

    public static getInstance() {
        if (DoctorsRepository.DoctorsRepositoryInstance === undefined) {
            DoctorsRepository.DoctorsRepositoryInstance = new DoctorsRepository();

        }
        return DoctorsRepository.DoctorsRepositoryInstance;
    };


    public findAll() {
        return Doctors.select()
    }

    public findById(id: string) {
        return Doctors.select().where({ id })
    }

    public async createDoctor(DoctorDTO: DoctorCreateDTO) {
        try {
            await Doctors.insert(DoctorDTO.toKnexObject())
        } catch (e) {
            console.error(e)
            return "The user could not have been created"
        }
    }
    public async deleteDoctor(doctorId: string) {
        return await Doctors.del().where({id: doctorId})

    }


}
