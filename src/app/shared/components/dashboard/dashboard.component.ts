import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products:any[] = []

  data: any;

  options: any;

  cronExpression: string = '0 0 12 * * ?'; 

  constructor(){}


  ngOnInit(): void {
    this.products = [
      {code: "Cronjob execution: Successful", name: "Today at 11:15:01 AM", category: "phone", quantity:23},
      {code: "Cronjob execution: Successful", name: "Today at 11:15:01 AM", category: "phone", quantity:23},
      {code: "Cronjob execution: Successful", name: "Today at 11:15:01 AM", category: "phone", quantity:23},
      {code: "Cronjob execution: Successful", name: "Today at 11:15:01 AM", category: "phone", quantity:23},
    ]

    const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                }
            ]
        };

        this.options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };
  }

}
