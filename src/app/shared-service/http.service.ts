import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IPatient } from '../patients/patient'
import { IMedication } from '../patient-detail/medication'

@Injectable()

export class HttpService{
    
    private patientsUrl = 'api/patients/patients.json';
    private medsUrl = 'api/medications/meds.json';

    constructor(private _http: Http){}

    getPatients(institute, department) : Observable<IPatient[]>{        
        return this._http.get(this.patientsUrl)
                .map((response: Response) => <IPatient[]> this.filterPatients(response.json(), institute, department))
                .catch(this.handleError);
    };

    getMeds(patientNumber): Observable<IMedication[]>{
        return this._http.get(this.medsUrl)
                .map((response: Response) => <IMedication[]> this.filterMedication(response.json(), patientNumber))
                ._catch(this.handleError);
    }
    
    /* private helpers */
    private filterPatients(array, institute, department){
        return array.filter(patient => patient.departmentCode === department && patient.instituteCode === institute);
    }

    private filterMedication(array, patientNumber){
        return array.filter(meds => meds.patientNumber === patientNumber);
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'SERVER ERROR');
    }
}