import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scheidt_and_bachmann_ui';
  name: any = "enter your name"
  email: any = "enter your email"
  password: any  = "enter your password"
  confirm_password : any = "enter your confirmed password"
  sidebarVisible:any;
  closeCallback(event:any){

  }
}
