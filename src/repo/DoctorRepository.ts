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
    findById(id: string) {
        return Doctors.select().where({id})
    }



}
