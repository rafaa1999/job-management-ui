import { Component } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {

  val!:any

  products: any[] = [
    {
      name: 'Product 1',
      price: 50.00,
      category: 'Electronics',
      quantity: 10,
      inventoryStatus: 'In Stock',
      rating: 4
    },
    {
      name: 'Product 2',
      price: 30.00,
      category: 'Clothing',
      quantity: 20,
      inventoryStatus: 'Low Stock',
      rating: 3
    },
    {
      name: 'Product 3',
      price: 80.00,
      category: 'Home & Kitchen',
      quantity: 15,
      inventoryStatus: 'Out of Stock',
      rating: 5
    },
    {
      name: 'Product 3',
      price: 80.00,
      category: 'Home & Kitchen',
      quantity: 15,
      inventoryStatus: 'Out of Stock',
      rating: 5
    },
    {
      name: 'Product 3',
      price: 80.00,
      category: 'Home & Kitchen',
      quantity: 15,
      inventoryStatus: 'Out of Stock',
      rating: 5
    },
    {
      name: 'Product 3',
      price: 80.00,
      category: 'Home & Kitchen',
      quantity: 15,
      inventoryStatus: 'Out of Stock',
      rating: 5
    },
    {
      name: 'Product 3',
      price: 80.00,
      category: 'Home & Kitchen',
      quantity: 15,
      inventoryStatus: 'Out of Stock',
      rating: 5
    },
  ];

  handleVal(){
    console.log(this.val)
  }




}
