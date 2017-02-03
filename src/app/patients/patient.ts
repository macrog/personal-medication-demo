export module IPatientList{
    export interface IPatient{
        firstName: string,
        lastName: string, 
        patientNumber: number, 
        gender: string, 
        birthdate: string;
        instituteCode: string;
        departmentCode: string;
    }
    export interface IInstitute{
        name: string;
        code: string;
    }
    export interface IDepartment{        
        name: string;
        code: string;
    }
}