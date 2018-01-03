import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from '../order/order.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from "./order.model";
import { OrderItensComponent } from 'app/order/order-itens/order-itens.component';
import { Router } from "@angular/router";

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value:'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ];
  delivery = 8;

  constructor(private orderService: OrderService,
              private router: Router) { }

  ngOnInit() {
  }

  itensValue(): number{
    return this.orderService.itensValue();
  }
  cartItems(){
    return this.orderService.cartItems();
  }
  increaseQty(item: CartItem){
    this.orderService.increaseQty(item);
  }
  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item);
  }
  removeItem(item: CartItem){
    this.orderService.removeItem(item);
  }
  checkOrder(order: Order){
    order.orderItems = this.cartItems()
                            .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));

    this.orderService.checkOrder(order).subscribe((orderId: string) =>{      
      this.orderService.clear();
      this.router.navigate(['/order-summary']);
    });
  }
}
