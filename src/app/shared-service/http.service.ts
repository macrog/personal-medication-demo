import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IPatientList } from '../patients/patient'
import { IMedication } from '../patient-detail/medication'

@Injectable()

export class HttpService{
    
    private _patientsUrl = 'src/api/patients/patients.json';
    private _institutesUrl = 'src/api/patients/institutes.json';
    private _departmentsUrl = 'src/api/patients/departments.json';
    private _medsUrl = 'src/api/medications/meds.json';

    constructor(private _http: Http){}

    getPatients(institute, department) : Observable<IPatientList.IPatient[]>{        
        return this._http.get(this._patientsUrl)
                .map((response: Response) => <IPatientList.IPatient[]> this.filterPatients(response.json(), institute, department))
                .catch(this.handleError);
    };

    getInstitutes() : Observable<IPatientList.IInstitute[]>{        
        return this._http.get(this._institutesUrl)
                .map((response: Response) => <IPatientList.IInstitute[]> response.json())
                .catch(this.handleError);
    };

    getDepartments() : Observable<IPatientList.IDepartment[][]>{        
        return this._http.get(this._departmentsUrl)
                .map((response: Response) => <IPatientList.IDepartment[][]> response.json())
                .catch(this.handleError);
    };

    getMeds(patientNumber): Observable<IMedication[]>{
        return this._http.get(this._medsUrl)
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