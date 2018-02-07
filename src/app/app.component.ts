import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learning Plan';
  newStack = '';
  newStartDate= '';
  newCompletionDate= ''
  plans = [];

  ngOnInit() {
    this.plans = JSON.parse(localStorage.getItem('plans'));
  }

  // To add new learning map
  addPlan(event){

    let planObj = {
      stack : this.newStack,
      startDate: this.newStartDate,
      completionDate: this.newCompletionDate
    }
    this.plans.push(planObj);
    localStorage.setItem('plans', JSON.stringify(this.plans))
    this.newStack = '';
    this.newStartDate = '';
    this.newCompletionDate = '';
  }

}
