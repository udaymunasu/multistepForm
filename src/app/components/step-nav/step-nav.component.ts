import { Component, OnInit } from '@angular/core';
import { FormService } from '../form/form.service';

@Component({
  selector: 'app-step-nav',
  templateUrl: './step-nav.component.html',
  styleUrls: ['./step-nav.component.scss']
})
export class StepNavComponent implements OnInit {

  stepDetails: { step: number; description: string;}[] = [
    { step: 1, description: 'Your info' },
    { step: 2, description: 'Select plan' },
    { step: 3, description: 'Add-ons' },
    { step: 4, description: 'Summary' }
  ]
  
  activeStep$: number | undefined;

  constructor(private formService: FormService) { }



  ngOnInit(): void {
    this.formService.activeStep$.subscribe(
      activeStep => this.activeStep$ = activeStep);
  }

}
