import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-header',
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.css']
})
export class OrderHeaderComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  displayedColumns: string[] = ['id', 'order_code', 'ingredients', 'order_status'];
  orders: any = [];
  isLoadingResults = false;

  ngOnInit() {
    this.list();
    console.log(this.orders);
  }

  list() {
    this.orderService.findAll().subscribe(
      res => {
        this.orders = res,
        console.log(this.orders);
      },
      error => {
        console.log(error);
        this.isLoadingResults = false
      }
    )
  }

}
