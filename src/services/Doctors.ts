import { DoctorCreateDTO } from "../dtos/DoctorCreateDTO";
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

    public async createDoctor(reqBody: any){
        const doctorDTO = await this.paramsToDoctorCreateDTO(reqBody);
        return this.doctorsRepository.createDoctor(doctorDTO);
    }

    public async deleteDoctor(doctorId: string){
        return await this.doctorsRepository.deleteDoctor(doctorId);
    }


    private async paramsToDoctorCreateDTO(reqBody: any): Promise<DoctorCreateDTO>{
        const doctorCreateDTO: DoctorCreateDTO = new DoctorCreateDTO();
        doctorCreateDTO.setFirst_name(reqBody.first_name);
        doctorCreateDTO.setLast_name(reqBody.last_name);
        await doctorCreateDTO.setPassword(reqBody.password);
        doctorCreateDTO.setUsername(reqBody.username);
        doctorCreateDTO.setProfession(reqBody.profession);
        return doctorCreateDTO;

    }


}

export { DoctorsService }
