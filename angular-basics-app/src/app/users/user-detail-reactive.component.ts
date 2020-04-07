import { Component, OnInit } from '@angular/core';
import { Users } from './users';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    templateUrl: "./user-detail-reactive.component.html"
})
export class UserDetailReactiveComponent implements OnInit {
    pageTitle: string = "User Detail - Reactive";
    user: Users = new Users();
    userForm: FormGroup;
    name: FormControl;

    ngOnInit() {
        this.name = new FormControl();
        this.userForm = new FormGroup({
            name: this.name,
            email: new FormControl(),
            phoneNumber: new FormControl()
        });
    }

    save() {
    }
}
