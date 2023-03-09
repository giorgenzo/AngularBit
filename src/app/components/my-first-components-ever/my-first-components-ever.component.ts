import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-first-components-ever',
  templateUrl: './my-first-components-ever.component.html',
  styleUrls: ['./my-first-components-ever.component.scss']
})
export class MyFirstComponentsEverComponent {
  @Input() title: string = " ";
  @Output() buttonclicked: EventEmitter<string> = new EventEmitter<string>();
  isSpecial = false;

  classBinding: Record<string, boolean> = {
    special: this.isSpecial
  }

  constructor() {
    setTimeout(() => {
      this.isSpecial = true;
    }, 3000)
  }
}
