import { Component } from '@angular/core';
import { PatientService } from './patients/patient.service';

@Component({
    selector: 'app-root',
    moduleId: module.id,
    template: `<div class='container'>
                  <pat-list></pat-list>
              </div>`,
    providers: [PatientService]
})
export class AppComponent {
    title = 'app works!';
}

    