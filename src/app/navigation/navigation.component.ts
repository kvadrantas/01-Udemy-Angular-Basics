import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  randomNr = Math.random()*30;
  inputText = 'mmm';
  redBorderEnabled = false;
  names = [
    'Jonoas',
    'Petras',
    'Antanas',
  ]

  @Input() car: {name: string, model: string};  // Props drilliing Parent to Child

  // Props drilling Child to Parent
  @Output() onDataReceived = new EventEmitter<{tekstas: string, skaicius: number}>()
  sendDataToParent() {
    this.onDataReceived.emit({
      tekstas: 'This text and number is transfered from Child to Parent',
      skaicius: 10,
    })
  }
  // -----------------------------------



  constructor() { }

  ngOnInit(): void {
  }

  generateRandomNmber() {
    this.randomNr = Math.random()*30;
    return this.randomNr;
  }

  addRedBorder() {
    this.redBorderEnabled = !this.redBorderEnabled;
  }

}
