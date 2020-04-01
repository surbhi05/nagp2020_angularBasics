import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1> {{ pageTitle }} </h1>
      <um-users></um-users>
    </div>
  `
})

export class AppComponent {
  pageTitle: string = "User Management Portal test"
}
