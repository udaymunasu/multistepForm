import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-step-one',
  templateUrl: './steo-one.component.html',
  styleUrls: ['./steo-one.component.scss']
})
export class SteoOneComponent implements OnInit {


  stepForm!: FormGroup;

  @Input() formGroupName!: string;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.stepForm = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;

  }
}
