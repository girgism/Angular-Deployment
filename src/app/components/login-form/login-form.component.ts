import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  formLogin?:FormGroup;
  constructor(private _formBilder:FormBuilder) { }

  ngOnInit(): void {
    this.formLogin= this._formBilder.group({
      UserName:['Girgis', 
                  [Validators.minLength(5), 
                    Validators.maxLength(15), 
                    Validators.required]
                ],

      Password:['', 
                  [Validators.minLength(8),
                    Validators.required]
                ]
    });
  }

  login(){
    console.log(JSON.stringify(this.formLogin?.value));
    //this.formLogin?.value;
  }

}
