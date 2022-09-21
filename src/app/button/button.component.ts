import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() btnName = '';
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();
  buttonPressed() {
    console.log(this.btnName);
    this.buttonClicked.emit(this.btnName);
  }

  constructor() {}

  ngOnInit(): void {}

  checkBlue() {
    if (this.btnName === '=') {
      return true;
    }
    return false;
  }

  checkRed() {
    if (this.btnName === 'Del') {
      return true;
    }
    return false;
  }

  checkOrange() {
    if (
      this.btnName === '/' ||
      this.btnName === '*' ||
      this.btnName === '+' ||
      this.btnName === '-' ||
      this.btnName === '%' ||
      this.btnName === 'C'
    ) {
      return true;
    }
    return false;
  }
}
