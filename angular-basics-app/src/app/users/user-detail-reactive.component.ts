import { Component, OnInit } from '@angular/core';
import { Users } from './users';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: "./user-detail-reactive.component.html"
})
export class UserDetailReactiveComponent implements OnInit {
    pageTitle: string = "User Detail - Reactive";
    user: Users = new Users();
    userForm: FormGroup;

    constructor(public fb: FormBuilder) { }

    ngOnInit() {
        this.userForm = this.fb.group({
            name: ["", [Validators.required, Validators.minLength(5)]],
            email: ["", Validators.required],
            phoneNumber: [{ value: "", disabled: false }, Validators.required]
        });
    }

    save() {
    }
}
