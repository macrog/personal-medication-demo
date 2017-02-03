import { Component } from '@angular/core';
import { HttpService } from './shared-service/http.service';
import { StateService } from './shared-service/state.service';

@Component({
    selector: 'app-root',
    moduleId: module.id,
    templateUrl: 'app.component.html',
    providers: [HttpService, StateService]
})
export class AppComponent {
    pageHeader = "HEALTHY CLINIC - PATIENT'S MEDICATION ";
}

    