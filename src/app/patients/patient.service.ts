import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IPatient } from './patient'

@Injectable()

export class PatientService{
    
    private patientsUrl = 'api/patients/patients.json';

    constructor(private _http: Http){}

    getPatients(institute, department) : Observable<IPatient[]>{        
        return this._http.get(this.patientsUrl)
                .map((response: Response) => <IPatient[]> this.filterResponse(response.json(), institute, department))
                .catch(this.handleError);
    };
    
    /* private helpers */
    private filterResponse(array, institute, department){
        return array.filter(patient => patient.departmentCode === department && patient.instituteCode === institute);
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'SERVER ERROR');
    }
}