import { Injectable } from '@angular/core';
import { IPatient } from '../patients/patient'

@Injectable()
export class StateService {
    private _patients: IPatient[];
    private _instituteCode: string;
    private _departmentCode: string;
    private _instituteIndex: number;

    constructor() { }

    set(patients: IPatient[], instituteCode: string, departmentCode: string, index: number){
        this._patients = patients;
        this._instituteCode = instituteCode;
        this._departmentCode = departmentCode;
        this._instituteIndex = index;
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
        if(this._patients && this._instituteCode && this._departmentCode && this._instituteIndex){
           return true;
        }
        return false;
    }

}
