import { Users } from './users/users';
import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private users: Users[] = [{
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

    constructor(private loggingService: LoggingService) { }

    public getUsers() {
        return this.users;
    }

    public addUser(user: Users): void {

        this.loggingService.log(JSON.stringify(user))

        user.id = this.users.length;
        user.username = user.name;

        this.users.push(user);
    }

    public deleteUser(id: number) {
        this.loggingService.log("User deleted");
        let index: number = this.users.findIndex(user => user.id == id);
        if (index != -1) {
            this.users.splice(index, 1)
        }
    }
}