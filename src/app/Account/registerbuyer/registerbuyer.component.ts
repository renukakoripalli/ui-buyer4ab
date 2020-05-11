import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registerbuyer',
  templateUrl: './registerbuyer.component.html',
  styleUrls: ['./registerbuyer.component.css']
})
export class RegisterbuyerComponent implements OnInit {
  item:Buyer;
  items:Buyer;
  itemForm:FormGroup;
  submitted=false;
  constructor(private builder:FormBuilder,private route:Router) { 
  }
  ngOnInit() {
    this.itemForm=this.builder.group({
    username:['',[Validators.required,Validators.pattern("[a-zA-Z]{5}")]],
    password:['',[Validators.required,Validators.pattern("[a-zA-Z]{4}")]],
    email:['',[Validators.required,Validators.email]],
    mobileno:['',[Validators.required,Validators.pattern("[6,9][0-9]{9}")]],
    datetime:['',[Validators.required]]
    }) 
  }
  get f()
  {
    return this.itemForm.controls;
  }
 
  onsubmit()
  {
  this.submitted=true;
 
}
onReset() {
    this.submitted = false;
    this.itemForm.reset();
}
redirect()
  {
    this.route.navigateByUrl('/Land/login')
  }
  resett(){
    this.itemForm.reset();
  }
}
