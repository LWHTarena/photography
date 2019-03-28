import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'photography';
  classFlag = true;

  changeClass(str: string) {
    console.log(str);
    this.classFlag = false;
  }
}
