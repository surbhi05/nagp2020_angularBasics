import { Component } from '@angular/core';
import { Users } from './users';
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: "./user-detail.component.html"
})
export class UserDetailComponent {
    pageTitle: string = "User Detail";
    user: Users;

    constructor() {
        this.user = new Users();
    }

    save(userForm: NgForm) {
        console.log(userForm.form);
        console.log(JSON.stringify(userForm.value));
    }
}
