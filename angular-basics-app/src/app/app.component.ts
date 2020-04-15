import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  pageTitle: string = "User Management Portal";
  newUser: string = "";

  constructor(private userService: UserService){
    this.userService.newUserAdded.subscribe((userName:string) =>{
      this.userAdded(userName);
    });
  }

  userAdded = (userName: string): void => {
    this.newUser = `New User added: ${userName}`;
    let self = this;
    console.log(this.newUser);
    const interval = setInterval(function () {
      self.newUser = "";
      clearInterval(interval);
    }, 5000);
  }

}
