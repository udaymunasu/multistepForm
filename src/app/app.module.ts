import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormComponent } from './components/form/form.component';
import { SteoOneComponent } from './components/form/form-steps/steo-one/steo-one.component';
import { StepTwoComponent } from './components/form/form-steps/step-two/step-two.component';
import { StepThreeComponent } from './components/form/form-steps/step-three/step-three.component';
import { StepFourComponent } from './components/form/form-steps/step-four/step-four.component';
import { ProgressiveButtonsComponent } from './components/progressive-buttons/progressive-buttons.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StepNavComponent } from './components/step-nav/step-nav.component';
import { StepFiveComponent } from './components/form/form-steps/step-five/step-five.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressiveButtonsComponent,
    FormComponent,
    SteoOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent, StepNavComponent,
    StepFiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
