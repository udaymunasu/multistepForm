import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { FormService } from '../../form.service';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.scss'],
})
export class StepFourComponent implements OnInit {
  @Input() stepForm!: FormGroup;

  personalDetails: any;
  planDetails: any;
  addOnDetails: any;

  constructor(
    private rootFormGroup: FormGroupDirective,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    if (this.rootFormGroup.form) {
      this.personalDetails =
        this.rootFormGroup.form.get('personalDetails')?.value ?? null;
      this.planDetails =
        this.rootFormGroup.form.get('planDetails')?.value ?? null;
      this.addOnDetails =
        this.rootFormGroup.form.get('addOnDetails')?.value ?? null;
    }
  }

  changePlan(): void {
    this.formService.goBackToPreviousStep(3);
  }
}
