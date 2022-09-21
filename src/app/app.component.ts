import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project-calc';
  firstNumber = '';
  secondNumber = '';
  operatorValue = '';
  output = '';

  displayButtons = [
    ['C', '%', 'Del', '/'], // 0
    ['9', '8', '7', '*'], // 1
    ['6', '5', '4', '-'], // 2
    ['3', '2', '1', '+'],
    ['0', '.', '='],
  ];

  buttonClicked(btnValue: any) {
    console.log('button clicked in app component: ', btnValue);

    switch (btnValue) {
      case 'C':
        this.clear();
        break;

      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
        this.buttonPressed(btnValue);
        break;

      case '%':
      case '*':
      case '-':
      case '+':
      case '/':
        this.operatorPressed(btnValue);
        break;

      case '=':
        this.equalPressed(btnValue);
        break;

      case 'Del':
        this.deletePressed();
        break;
    }
  }

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
    console.log('clear called!');
  }
}
