import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { IMedication } from './medication'

import { HttpService } from '../shared-service/http.service';


@Component({
    moduleId: module.id,
    templateUrl: 'patient-detail.component.html'
})

export class PatientDetailComponent implements OnInit{
    patientNumber: number;
    errorMessage: string;

    meds: IMedication[];

    constructor(private _route: ActivatedRoute, private _httpService: HttpService){}

    ngOnInit(): void{
        this.patientNumber = +this._route.snapshot.params['patientNumber'];
        
        this._httpService.getMeds(this.patientNumber)
            .subscribe(meds => this.meds = meds,
            onerror => this.errorMessage = <any>onerror);
        
    }
}