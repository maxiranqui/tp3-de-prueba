import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalComponent } from './formularios/hospital/hospital/hospital.component';
import { PacienteComponent } from './formularios/paciente/paciente/paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent,
    PacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
