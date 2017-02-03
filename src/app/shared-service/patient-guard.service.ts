import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router'

@Injectable()

export class PatientGuardService implements CanActivate{

    constructor(private _route: Router){}

    canActivate(route: ActivatedRouteSnapshot): boolean{

        let patientNumber = +route.url[1].path;
        if(isNaN(patientNumber) || patientNumber < 1){
            //something is wrong here 
            alert('you have provided wrong url');
            //navigate back to patients list
            this._route.navigate(['/patients']);

            return false;
        }
        return true;
    }
    
}