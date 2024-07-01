import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { planOptions } from './planDetails.module';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss'],
})
export class StepTwoComponent implements OnInit {
  stepForm!: FormGroup;
  planType: string = 'arcade' || 'advanced' || 'pro';
  timeFrame: string = 'monthly' || 'yearly';
  totalCost: any;
  checked = false;
  planOptions: any = planOptions;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.stepForm = this.rootFormGroup.control.get('planDetails') as FormGroup;
    this.timeFrame = this.stepForm.controls['duration'].value || 'monthly';
    this.checked = this.timeFrame === 'monthly' ? false : true;
    this.planType = this.planType || 'arcade';
  }

  public onPlanChange(plan: string) {
    this.planType = plan;
  }

  updatePlanType(plan: string, cost?: number) {
    this.planType = plan;
    this.totalCost = cost;
    this.stepForm.patchValue({
      plan: plan,
      planCost: cost,
      totalCost: cost,
    });
  }

  updateDuration() {
    const planDetails =
      this.planOptions[
        this.planOptions.findIndex((p: any) => p.plan == this.planType)
      ].duration[this.timeFrame];
    this.stepForm.patchValue({
      plan: this.planType,
    });
    if (this.checked === false) {
      this.stepForm.patchValue({
        duration: 'monthly',
        planCost: planDetails.addToTotal,
        totalCost: planDetails.addToTotal,
      });
    }
    if (this.checked === true) {
      this.stepForm.patchValue({
        duration: 'yearly',
        planCost: planDetails.addToTotal,
        totalCost: planDetails.addToTotal,
      });
    }
  }

  toggleDuration() {
    this.checked = !this.checked;
    if (this.checked === false) {
      this.timeFrame = 'monthly';
      this.updateDuration();
    }
    if (this.checked === true) {
      this.timeFrame = 'yearly';
      this.updateDuration();
    }
  }
}
