import { Component } from '@angular/core';

@Component({
    selector: "um-users",
    templateUrl: "./user-list.component.html"
})
export class UserListComponent {
    pageTitle: string = "User List";
    filterInputPlaceholder: string = "Enter name here";
    users: any[] = [{
        "id": 1,
        "name": "Neha Jain",
        "email": "nj@gmail.com",
        "phoneNumber": "9876543210",
        "username": "nehaJain",
        "age": 26
    }, {
        "id": 2,
        "name": "Aastha Jain",
        "email": "aj@gmail.com",
        "phoneNumber": "8876543210",
        "username": "aasthaJain",
        "age": 26
    }];
    deleteRecord(id: number): void {
        let index: number = this.users.findIndex(user => user.id == id);
        if (index != -1) {
            this.users.splice(index, 1)
        }
    }
}