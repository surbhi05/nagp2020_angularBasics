import { Users } from './users/users';

export class UserService{
    
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

    public getUsers(){
        return this.users;
    }
}