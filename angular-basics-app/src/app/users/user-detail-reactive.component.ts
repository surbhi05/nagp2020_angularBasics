import { Component } from '@angular/core';
import { IUsers } from './users';

@Component({
    templateUrl: "./user-detail-reactive.component.html"
})
export class UserDetailReactiveComponent {
    pageTitle: string = "User Detail - Reactive";
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

    save() {
    }
}
