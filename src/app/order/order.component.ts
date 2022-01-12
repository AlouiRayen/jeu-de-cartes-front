import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Order } from '../models/Order';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Output() emitSortOrder: EventEmitter<any> = new EventEmitter();

  values = ["As","2","3","4","5","7","6","8","9","10","Dame","Valet","Roi"];

  colors = ["Carreaux","Trèfle", "Coeur", "Pique"];
  
  constructor() { }

  ngOnInit(): void {
  }

  saveSortOrder(){
    const order = new Order(this.values,this.colors);
    this.emitSortOrder.emit(order)
  }

}
