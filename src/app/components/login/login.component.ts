import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  tenantForm!:FormGroup
  tenantId!:string

  constructor(private fb:FormBuilder,private router:Router){}

  ngOnInit(): void {
    this.createTenantForm()
  }

  createTenantForm(){
    this.tenantForm = this.fb.group({
      tenantId : ['']
    })
  }

  login(){
    localStorage.setItem('tenantId',this.tenantId)
    this.router.navigateByUrl("/carParks")
  }

}
