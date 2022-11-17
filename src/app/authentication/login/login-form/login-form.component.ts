import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm : FormGroup;
  
  constructor(private fb: FormBuilder) { 
    const passwordRegex = '[a-zA-z][a-zA-Z-9]{5,8}';

    this.loginForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.pattern(passwordRegex)]
    })
  }

  ngOnInit(): void {


  }

}
