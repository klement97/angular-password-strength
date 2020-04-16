import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    signUpForm: FormGroup;

    constructor(
            private fb: FormBuilder
    ) {
    }

    ngOnInit(): void {
        this.signUpForm = this.initialSignUpForm();
    }

    initialSignUpForm(): FormGroup {
        const passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');
        return this.fb.group({
            email: ['', [
                Validators.email, Validators.minLength(3), Validators.maxLength(300)
            ]],
            username: ['', [
                Validators.minLength(3), Validators.maxLength(255)
            ]],
            password: ['', [
                Validators.pattern(passwordRegex)
            ]]
        });
    }

}
