import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  regform:FormGroup;
  submitted=false;
  list:Buyer[];
  constructor(private route:Router,private builder:FormBuilder) { }

  ngOnInit() {
    this.regform=this.builder.group({
      
      username:['',Validators.required],
      password:['',Validators.required]
      
    });
  }
    get f()
  {
     return this.regform.controls; 
  }
   
  }
//   onsubmit()
//   {
//   this.submitted=true;
  
// }

