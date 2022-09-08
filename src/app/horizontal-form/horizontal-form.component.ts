import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-horizontal-form',
  templateUrl: './horizontal-form.component.html',
  styleUrls: ['./horizontal-form.component.scss'],
})
export class HorizontalFormComponent implements OnInit {
  horizontalForm: FormGroup;
  data = [
    { radio: 'r1', checkbox: 'ch1' },
    { radio: 'r2', checkbox: 'ch2' },
    { radio: 'r3', checkbox: 'ch3' },
  ];

  constructor(private fb: FormBuilder) {
    this.horizontalForm = this.fb.group({
      dataArray: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    for (let i = 0; i < this.data.length; i++) {
      this.dataArrayControl.insert(
        i,
        this.fb.group({
          radio: this.data[i].radio,
          checkbox: this.data[i].checkbox,
        })
      );
    }
  }

 get dataArrayControl(){
  return this.horizontalForm.get('dataArray') as FormArray;
 }

  get dataControls(){
    return this.dataArrayControl.controls;
  }

  onSubmit() {
    console.log('==>',this.dataControls);
  }
}
