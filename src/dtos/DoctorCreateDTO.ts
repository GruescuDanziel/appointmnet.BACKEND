import { hashPassowrd, isStringNonEmpty } from "../utils/utils";

class DoctorCreateDTO {

    private first_name: string = "";
    private last_name: string = "";
    private username: string = "";
    private password: string = "";
    private profession: string = "";

    public constructor() { }


    public setFirst_name(first_name: string) {
        this.first_name = first_name;
    }

    public setLast_name(last_name: string) {
        this.last_name = last_name;
    }

    public setUsername(username: string) {
        this.username = username;
    }

    public async setPassword(password: string) {
        this.password = await hashPassowrd(password);
    }

    public setProfession(profession: string) {
        this.profession = profession;
    }

    public toKnexObject() {
        let valid: boolean = true;
        if (!isStringNonEmpty(this.first_name)) {
            console.log("MISSING FIRST_NAME");
            valid = false;
        }
        if (!isStringNonEmpty(this.last_name)) {
            console.log("MISSING LAST_NAME");
            valid = false;
        }

        if (!isStringNonEmpty(this.username)) {
            console.log("MISSING USERNAME");
            valid = false;
        }

        if (this.password === "") {
            console.log("MISSING PASSWORD");
            valid = false;
        }

        if (!isStringNonEmpty(this.profession)) {
            console.log("MISSING PROFESSION");
            valid = false;
        }

        if(valid){
            return {
                first_name: this.first_name,
                last_name: this.last_name,
                username: this.username,
                password: this.password,
                profession: this.profession
            }
        }
        return {}

    }
}

export {DoctorCreateDTO}
