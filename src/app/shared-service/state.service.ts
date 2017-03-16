import { Injectable } from '@angular/core';
import { IPatientList } from '../patients/patient'

@Injectable()
export class StateService {
    private _patients: IPatientList.IPatient[];
    private _instituteCode: string;
    private _departmentCode: string;
    private _instituteIndex: number;
    private _stored: boolean = false;

    constructor() { }

    set(patients: IPatientList.IPatient[], instituteCode: string, departmentCode: string, index: number){
        this._patients = patients;
        this._instituteCode = instituteCode;
        this._departmentCode = departmentCode;
        this._instituteIndex = index;
        this._stored = true;
    }
    getPatiets(){
        return this._patients;
    }
    getInstitute(){
        return this._instituteCode;
    }
    getDepartment(){
        return this._departmentCode;
    }
    getIndex(){
        return this._instituteIndex;
    }
    isStored(){
        if(this._stored){
           return true;
        }
        return false;
    }

}
