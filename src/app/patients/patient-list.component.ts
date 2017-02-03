import { Component, OnInit } from '@angular/core';
import { IPatient } from './patient';
import { HttpService } from '../shared-service/http.service';

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
    
    patients: IPatient[];

    institutes: any[] = [
        {
            name: 'Institute 1', 
            code: 'I1'
            
        },
        {
            name: 'Institute 2', 
            code: 'I2'   
        }
    ];
    departments: any[] = [
        [
            {
                name:'Department 1',
                code:'D1'
            },
            {
                name:'Department 2',
                code:'D2'
            }
        ],
        [            
            {
                name:'Department 3',
                code:'D3'
            },
            {
                name:'Department 4',
                code:'D4'
            }
            ,
            {
                name:'Department 5',
                code:'D5'
            }        
        ]
    ];

    constructor(private _httpService: HttpService){}

    ngOnInit(): void{

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
}