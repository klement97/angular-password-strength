import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserModel } from './../../models/auth.models';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  errors: any = {};

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.signUpForm = this.initialSignUpForm();
  }

  initialSignUpForm(): FormGroup {
    const passwordRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    );
    return this.fb.group({
      email: [
        'klementomeri97@gmail.com',
        [Validators.email, Validators.minLength(3), Validators.maxLength(300)],
      ],
      username: [
        'klement',
        [Validators.minLength(3), Validators.maxLength(255)],
      ],
      password: ['t', [Validators.pattern(passwordRegex)]],
    });
  }

  signUp() {
    const user: UserModel = this.signUpForm.value;
    this.authService.signUp(user).subscribe(
      (res) => console.log(res),
      (err) => (this.errors = err.error)
    );
  }
}
