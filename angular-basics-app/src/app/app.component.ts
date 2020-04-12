import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  pageTitle: string = "User Management Portal";
  newUser: string = "";

  userAdded = (userName: string): void => {
    this.newUser = `New User added: ${userName}`;
    let self = this;
    console.log(this.newUser);
    const interval = setInterval(function () {
      self.newUser = "";
      clearInterval(interval);
    }, 20000);
  }

}
