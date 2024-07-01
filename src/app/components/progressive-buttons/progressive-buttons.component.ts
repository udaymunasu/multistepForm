import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '../form/form.service';
@Component({
  selector: 'app-progression-buttons',
  templateUrl: './progressive-buttons.component.html',
  styleUrls: ['./progressive-buttons.component.scss'],
})
export class ProgressiveButtonsComponent implements OnInit {
  stepForm!: FormGroup;
  activeStep$!: number;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.stepForm = this.formService.stepForm;
    this.formService.activeStep$.subscribe(
      (step: any) => (this.activeStep$ = step)
    );
  }

  nextStep() {
    if (
      this.activeStep$ == 1 &&
      this.stepForm.controls['personalDetails'].pristine &&
      !this.stepForm.controls['personalDetails'].touched
    ) {
      // TO-DO => display error message if step 1 is skipped
      // console.log(this.stepForm.controls['personalDetails'].pristine, !this.stepForm.controls['personalDetails'].touched)
    } else {
      this.formService.goToNextStep(this.activeStep$);
    }
  }
  goBack() {
    this.formService.goBackToPreviousStep(this.activeStep$);
  }

  confirmAndSubmitForm() {
    this.formService.submit();
  }
}
