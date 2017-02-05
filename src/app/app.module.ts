import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/head.component';
import { FooterComponent } from './footer/foot.component';
import { PatientListComponent } from './patients/patient-list.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { MedicationOrderPipe } from './patient-detail/medication-order.pipe';
import { PatientGuardService } from './shared-service/patient-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PatientListComponent,
    PatientDetailComponent,    
    MedicationOrderPipe   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: 'patients', component: PatientListComponent },
      { path: 'patient/:patientNumber', canActivate: [ PatientGuardService ], component: PatientDetailComponent },
      { path: '', redirectTo: 'patients', pathMatch: 'full'},
      { path: '**', redirectTo: 'patients', pathMatch: 'full'}
    ])
  ],
  providers: [ PatientGuardService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
