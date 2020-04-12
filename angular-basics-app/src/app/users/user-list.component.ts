import { Component } from '@angular/core';
import { Users } from './users';
import { UserService } from '../user.services';
import { LoggingService } from '../logging.service';

@Component({
    templateUrl: "./user-list.component.html",
    providers: [UserService, LoggingService]
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
    filteredUsers: Users[];
    users: Users[];

    constructor(private userService: UserService, private loggingService: LoggingService) {
        // const userService = new UserService();
        this.users = userService.getUsers();
        this.filteredUsers = this.users;
    }
    deleteRecord(id: number): void {
        this.loggingService.log("User deleted");
        let index: number = this.users.findIndex(user => user.id == id);
        if (index != -1) {
            this.users.splice(index, 1)
        }
    }
    updateFilter(filterBy: string): Users[] {
        filterBy = filterBy.toLowerCase();
        return this.users.filter(user =>
            user.name.toLowerCase().indexOf(filterBy) !== -1);
    }
}