import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  tenantForm!:FormGroup
  tenantId!:string
  tenantList:any[] = ["meta","google"]

  constructor(private fb:FormBuilder,
    private router:Router,
    private messageService:MessageService){}

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
    console.log(this.tenantId)
    const exists = this.tenantList.includes(this.tenantId)
    if(!exists){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: `${this.tenantId} is not being configured` })
      this.tenantForm.reset()
      return
    }
    this.messageService.add({ severity: 'success', summary: 'Success', detail: `${this.tenantId} is logged successfully` })
    setTimeout(() => {
      this.router.navigateByUrl("/carParks")
    }, 200); // 2000 milliseconds = 2 seconds
  }

}


