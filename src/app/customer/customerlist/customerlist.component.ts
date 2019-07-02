import { Component, OnInit } from '@angular/core';
import Customer from '../../shared/interfaces/customer.interface';
import customers from '../../shared/data/data';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})



export class CustomerlistComponent implements OnInit {

  Customers:Array<Customer>;

  constructor() {
    this.Customers=customers;
   }

  ngOnInit() {
  }

}
