import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

  categories = [
    {id: 1, name: 'Html'},
    {id: 2, name: 'CSS'},
    {id: 3, name: 'PHP'},
    {id: 4, name: 'C#'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
