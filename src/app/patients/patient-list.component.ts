import { Component, OnInit } from '@angular/core';
import { IPatientList } from './patient';
import { HttpService } from '../shared-service/http.service';
import { StateService } from '../shared-service/state.service';

@Component({
    moduleId: module.id,
    templateUrl: 'patient-list.component.html',
    styleUrls:['patient-list.component.css']
})

export class PatientListComponent implements OnInit{
    selectedInstituteIndex: number;
    department: string;
    institute: string;
    errorMessage: string;    
    patients: IPatientList.IPatient[];
    institutes: IPatientList.IInstitute[];
    departments: IPatientList.IDepartment[][];

    constructor(private _httpService: HttpService, private _stateService: StateService){}

    ngOnInit(): void{
        
        this._httpService.getInstitutes()
            .subscribe(inst => this.institutes = inst,
            onerror => this.errorMessage = <any>onerror);
        
        this._httpService.getDepartments()
            .subscribe(dept => this.departments = dept,
            onerror => this.errorMessage = <any>onerror);

        let stored = this._stateService.isStored();
        if(stored){
            this.patients = this._stateService.getPatiets();
            this.institute = this._stateService.getInstitute();
            this.department = this._stateService.getDepartment();
            this.selectedInstituteIndex = this._stateService.getIndex();
        }
    }
    instituteOnChange(value: any):void{        
        this.selectedInstituteIndex = this.institutes.findIndex(x => x.code===value);
        this.department = this.departments[this.selectedInstituteIndex][0].code;
    }    

    searchForPatients(){
        this._httpService.getPatients(this.institute, this.department)
            .subscribe(patients => this.patients = patients,
            onerror => this.errorMessage = <any>onerror);
    }
    storeState(){
        this._stateService.set(this.patients, this.institute, this.department, this.selectedInstituteIndex);
    }
}