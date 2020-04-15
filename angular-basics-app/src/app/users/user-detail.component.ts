import { Component } from '@angular/core';
import { Users } from './users';
import { NgForm } from '@angular/forms';
import { LoggingService } from '../logging.service';
import { UserService } from '../user.service';

@Component({
    templateUrl: "./user-detail.component.html",
    providers:[LoggingService]
})
export class UserDetailComponent {
    pageTitle: string = "User Detail";
    user: Users;

    constructor(private loggingService:LoggingService, private userService: UserService) {
        this.user = new Users();
    }

    save(userForm: NgForm) {        
        this.userService.addUser(userForm.value);
    }
}
