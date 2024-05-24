import { Component } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {

  val!:any


  handleVal(){
    console.log(this.val)
  }

}
