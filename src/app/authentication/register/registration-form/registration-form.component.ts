import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {

  registerForm : FormGroup;

  constructor(private fb: FormBuilder) {
    const passwordRegex = '[a-zA-z][a-zA-Z-9]{5,8}';

    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['',Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.pattern(passwordRegex)],
    });
  }

  ngOnInit(): void {}
}
