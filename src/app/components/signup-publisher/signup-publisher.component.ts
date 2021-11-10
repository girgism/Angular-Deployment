import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-publisher',
  templateUrl: './signup-publisher.component.html',
  styleUrls: ['./signup-publisher.component.css']
})
export class SignupPublisherComponent implements OnInit {
  formSignup?:FormGroup;
  constructor(private _formBilder:FormBuilder) { }


  ngOnInit(): void {
    this.formSignup=this._formBilder.group({
      UserName:['',
        [Validators.required, 
          Validators.minLength(5),
          Validators.maxLength(20)
        ]
      ],

      Email:['',
        [Validators.required, 
          Validators.email
        ]
      ],
      Password:['',
        [Validators.required, 
          Validators.minLength(8)
        ]
      ],
      ConfirmPassword:['',
        [Validators.required, 
          Validators.minLength(8)
        ]
      ],
      PhoneNumber:['',
        [Validators.required, 
          Validators.maxLength(11),
          Validators.minLength(11)
        ]
      ],
      Address:['',
        [Validators.required, 
          Validators.minLength(8)
        ]
      ],

    })
  }

 

}
