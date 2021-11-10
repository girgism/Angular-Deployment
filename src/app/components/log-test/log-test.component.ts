import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'log-test',
  templateUrl: './log-test.component.html',
  styleUrls: ['./log-test.component.css']
})
export class LogTestComponent implements OnInit {

  employees:string[]=[];
  employeesNumber:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  increaseEmployeesNumber(empName:string){
    if(empName){
      this.employees.push(empName);
      this.employeesNumber = this.employees.length;
      console.log(this.employees);
    } else
      console.log("Value Empity")
    
  }
}
