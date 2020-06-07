import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <mat-toolbar color="primary">
        {{ title }}
      </mat-toolbar>
      <select-component></select-component>
    </div>
  `
})
export class AppComponent implements OnInit {
  title = 'Multiple dropdown test in Angular with NgRx Store';

  constructor() { }

  ngOnInit() {
  }

}
