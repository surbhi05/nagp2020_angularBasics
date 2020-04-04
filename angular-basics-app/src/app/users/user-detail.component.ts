import { Component } from '@angular/core';
import { IUsers } from './users';
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: "./user-detail.component.html"
})
export class UserDetailComponent {
    pageTitle: string = "User Detail";
    user: IUsers;

    constructor() {
        this.user = {
            "id": 0,
            "name": "",
            "email": "",
            "phoneNumber": "",
            "username": "",
            "age": 0,
            "salary": 0,
            "dob": new Date()
        };
    }

    save(userForm: NgForm) {
        console.log(userForm.form);
        console.log(JSON.stringify(userForm.value));
    }
}
