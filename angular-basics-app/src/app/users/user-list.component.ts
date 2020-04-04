import { Component } from '@angular/core';
import { IUsers } from './users';

@Component({
    selector: "um-users",
    templateUrl: "./user-list.component.html"
})
export class UserListComponent {
    pageTitle: string = "User List";
    filterInputPlaceholder: string = "Enter name here";
    _filterText: string;
    get filterText(): string {
        return this._filterText;
    }
    set filterText(value: string) {
        this._filterText = value;
        this.filteredUsers = this.filterText ? this.updateFilter(this.filterText) : this.users;
    }
    filteredUsers: IUsers[];
    users: IUsers[] = [{
        "id": 1,
        "name": "Neha Jain",
        "email": "nj@gmail.com",
        "phoneNumber": "9876543210",
        "username": "nehaJain",
        "age": 26,
        "salary": 1000000,
        "dob": new Date("04-10-1993")
    }, {
        "id": 2,
        "name": "Aastha Jain",
        "email": "aj@gmail.com",
        "phoneNumber": "8876543210",
        "username": "aasthaJain",
        "age": 26,
        "salary": 1200000,
        "dob": new Date("10-28-1993")
    }];
    constructor() {
        this.filteredUsers = this.users;
    }
    deleteRecord(id: number): void {
        let index: number = this.users.findIndex(user => user.id == id);
        if (index != -1) {
            this.users.splice(index, 1)
        }
    }
    updateFilter(filterBy: string): IUsers[] {
        filterBy = filterBy.toLowerCase();
        return this.users.filter(user =>
            user.name.toLowerCase().indexOf(filterBy) !== -1);
    }
}