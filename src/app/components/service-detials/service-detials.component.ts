import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-detials',
  templateUrl: './service-detials.component.html',
  styleUrls: ['./service-detials.component.css']
})
export class ServiceDetialsComponent implements OnInit {


  names:string [] =["ahmed","alaa", "mostafa", "girgis", "abanoub", "youssif","Mina","kero","mando"];

   filter :string = "";
   // Pagination parameters.
  p: number = 1;
  count: number = 2;
  
  comments:string[]=[" Fantastic bla bla bla bla bla bla",
  " Very good  bla bla bla bla bla bla",
  " Somthing magic bla bla bla bla bla bla",
  " it is very  bla bla bla bla bla bla",
  " Handsome  bla bla bla bla bla bla",
  " OMG i can not  bla bla bla bla bla bla",
  " its bla bla bla bla bla bla"
];
  constructor() { }

  ngOnInit(): void {
  }

}
