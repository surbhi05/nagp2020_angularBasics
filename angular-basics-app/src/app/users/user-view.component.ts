import { Component, Input, EventEmitter, Output} from '@angular/core';
import { Users } from './users';

@Component({
    selector: 'user-view',
    template: `Name: {{user.name}}
               Email: {{user.email}}
               Phone number: {{user.phoneNumber}}
               <button class="btn btn-primary" (click)="hideUserDetails()">Hide</button>`
})
export class UserViewComponent{

    @Input('udetails') user: Users;
    @Output('hideUserDetails') hideUser: EventEmitter<boolean> = new EventEmitter<boolean>();

    hideUserDetails(){
        this.hideUser.next(true);
    }

}
