import { Component, OnDestroy } from '@angular/core';
import { Users } from './users';
import { UserService } from '../user.service';
import { Subscription, Observable } from 'rxjs';

@Component({
    templateUrl: "./user-list.component.html"
})
export class UserListComponent implements OnDestroy {
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

    subscription: Subscription = new Subscription();

    constructor(private userService: UserService) {
        // const userService = new UserService();
        this.users = userService.getUsers();
        this.filteredUsers = this.users;

        const customObservable = Observable.create( (observer)=>{
            let count = 0;
            setInterval( () =>{
                observer.next(count++);

                if(count === 5){
                    observer.complete();
                }

                if(count >3){
                    observer.error(new Error('Count greater than 3!!!'));
                    
                }
            }, 1000);
        });


        this.subscription.add(customObservable.subscribe(count => {
            console.log(count);
        }, error =>{
            console.log(error);
            alert(error);
        },
         () =>{
             console.log("Observable completed!");
         }));

    }
    deleteRecord(id: number): void {
        this.userService.deleteUser(id);
    }
    updateFilter(filterBy: string): Users[] {
        filterBy = filterBy.toLowerCase();
        return this.users.filter(user =>
            user.name.toLowerCase().indexOf(filterBy) !== -1);
    }


    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}