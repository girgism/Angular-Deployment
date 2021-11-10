import { Component, OnInit } from '@angular/core';
import {RecipeContents} from '../../models/recipe';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  allRecipes:RecipeContents[]=[
    {recipeName:"Chiken", recipeCon:"bahjsd- shadgjhg -sagdh- ashgdjh -"},
    {recipeName:"Sohoko", recipeCon:"bahjsd- shadgjhg -sagdh- ashgdjh -"},
    {recipeName:"Bobo", recipeCon:"bahjsd- shadgjhg -sagdh- ashgdjh -"},
    {recipeName:"Selafa", recipeCon:"bahjsd- shadgjhg -sagdh- ashgdjh -"},
    {recipeName:"mandela", recipeCon:"bahjsd- shadgjhg -sagdh- ashgdjh -"},
    {recipeName:"Modzela", recipeCon:"bahjsd- shadgjhg -sagdh- ashgdjh -"},
    {recipeName:"Flavor", recipeCon:"bahjsd- shadgjhg -sagdh- ashgdjh -"},
    {recipeName:"shedder", recipeCon:"bahjsd- shadgjhg -sagdh- ashgdjh -"},
    {recipeName:"narto", recipeCon:"bahjsd- shadgjhg -sagdh- ashgdjh -"},
    {recipeName:"Bal Bla", recipeCon:"bahjsd- shadgjhg -sagdh- ashgdjh -"},
    {recipeName:"Flavor", recipeCon:"bahjsd- shadgjhg -sagdh- ashgdjh -"},
    {recipeName:"Hover", recipeCon:"bahjsd- shadgjhg -sagdh- ashgdjh -"},
  ];

   names:string [] =["ahmed","alaa", "mostafa", "girgis", "abanoub", "youssif","Mina","kero","mando"];

   filter :string = "";
   // Pagination parameters.
  p: number = 1;
  count: number = 2;
  
  constructor() {
  }

  ngOnInit(): void {
  }

}
