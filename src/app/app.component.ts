import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';

  // Props drilliing Chiild to Parent
  childText = '';
  childNumber = null;

  storeChildData(childData: {tekstas: string, skaicius: number}) {
    this.childText = childData.tekstas;
    this.childNumber = childData.skaicius;
  }
  // --------------------------------
}
