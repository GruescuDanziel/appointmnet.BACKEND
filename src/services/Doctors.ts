import { DoctorsRepository } from "../repo/DoctorRepository";

class DoctorsService {
    private static DoctorsServiceInstance: DoctorsService;
    private doctorsRepository: DoctorsRepository;

    private constructor() {
        this.doctorsRepository = DoctorsRepository.getInstance();
    };

    public static getInstance() {
        if (DoctorsService.DoctorsServiceInstance === undefined) {
            DoctorsService.DoctorsServiceInstance = new DoctorsService();
        }
        return DoctorsService.DoctorsServiceInstance;
    };


    public async getAllDoctors() {
        return this.doctorsRepository.findAll();
    }

    public async getDoctorById(id: string){
        return this.doctorsRepository.findById(id);
    }


}

export { DoctorsService }
