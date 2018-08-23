import {Component} from '@angular/core';
import {Expression} from "./expression";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputValue: string;

  expression: Expression = new Expression();

  history: Expression[] = [];

  plus() {
    this.setOperation('+');
  }

  divide() {
    this.setOperation('/');
  }

  multiply() {
    this.setOperation('*');
  }

  setOperation(operation: string) {
    this.expression.firstOperand = this.parseInput();
    this.expression.operation = operation;
  }

  calculate() {
    this.expression.secondOperand = this.parseInput();
    switch (this.expression.operation) {
      case '+':
        this.expression.result = this.expression.firstOperand + this.expression.secondOperand;
        break;

      case '/':
        this.expression.result = this.expression.firstOperand / this.expression.secondOperand;
        break;

      case '*':
        this.expression.result = this.expression.firstOperand * this.expression.secondOperand;
        break;
    }
    this.history.push(this.expression);
    this.expression = new Expression();
  }

  private parseInput(): number {
    const parsedValue: number = parseInt(this.inputValue, 10);
    this.inputValue = '';
    return parsedValue;
  }
}
