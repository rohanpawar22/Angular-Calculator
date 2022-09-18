import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  firstNumber = '';
  secondNumber = '';
  operatorValue = '';
  output = '';

  checkIsOperatorEmpty() {
    return this.operatorValue == '' ? true : false;
  }

  buttonPressed(btnName: any) {
    console.log(btnName);
    if (this.checkIsOperatorEmpty()) {
      this.firstNumber = this.firstNumber + btnName;
      this.output = this.firstNumber;
    } else {
      this.secondNumber = this.secondNumber + btnName;
      this.output = this.secondNumber;
    }
  }

  operatorPressed(btnName: any) {
    console.log(btnName);
    this.operatorValue = btnName;
  }

  deletePressed() {
    this.output = this.output.slice(0, this.output.length - 1);
    if (this.checkIsOperatorEmpty()) {
      this.firstNumber = this.output;
    } else {
      this.secondNumber = this.output;
    }
  }

  equalPressed(btnName: any) {
    console.log(btnName);
    let result = 0;
    switch (this.operatorValue) {
      case '+':
        result = parseFloat(this.firstNumber) + parseFloat(this.secondNumber);
        this.output = result.toFixed(2).toString();
        break;
      case '-':
        result = parseFloat(this.firstNumber) - parseFloat(this.secondNumber);
        this.output = result.toFixed(2).toString();
        break;
      case '/':
        result = parseFloat(this.firstNumber) / parseFloat(this.secondNumber);
        this.output = result.toFixed(2).toString();
        break;
      case '*':
        result = parseFloat(this.firstNumber) * parseFloat(this.secondNumber);
        this.output = result.toFixed(2).toString();
        break;
      case '%':
        result = parseFloat(this.firstNumber) % parseFloat(this.secondNumber);
        this.output = result.toFixed(2).toString();
        break;
    }
  }
  clear() {
    this.firstNumber = '';
    this.secondNumber = '';
    this.operatorValue = '';
    this.output = '0';
  }
}
