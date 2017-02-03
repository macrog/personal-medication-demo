import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IMedication } from './medication'
import { HttpService } from '../shared-service/http.service';

@Component({
    moduleId: module.id,
    templateUrl: 'patient-detail.component.html',
    styleUrls: ['patient-detail.component.css']
})

export class PatientDetailComponent implements OnInit{
    patientNumber: number;
    errorMessage: string;
    placeholder: string = '';
    currentMed: IMedication;
    openRemarks: boolean = false;

    meds: IMedication[];

    constructor(private _route: ActivatedRoute, private _httpService: HttpService){}

    ngOnInit(): void{
        this.patientNumber = +this._route.snapshot.params['patientNumber'];
        
        this._httpService.getMeds(this.patientNumber)
            .subscribe(meds => this.meds = meds,
            onerror => this.errorMessage = <any>onerror);        
    }
    openRemarkForm(currentMed: IMedication):void{
        this.openRemarks = !this.openRemarks;
        this.currentMed = currentMed;
    }
    saveRemark(rem: string){ 
        if(rem){
            this.currentMed.remarks = rem;
            this.openRemarks = !this.openRemarks;
            this.placeholder = '';
        }else{
            this.placeholder = 'Please provide a some remarks';
        }       
        
    }
}