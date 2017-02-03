import { Component } from '@angular/core';
import { PatientService } from './patients/patient.service';

@Component({
    selector: 'app-root',
    moduleId: module.id,
    templateUrl: 'app.component.html',
    providers: [PatientService]
})
export class AppComponent {
    pageHeader = "HEALTHY CLINIC - PATIENT'S MEDICATION ";
}

    