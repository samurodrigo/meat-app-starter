import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RestaurantService } from "../../restaurants/restaurants.service";
import { Observable } from "rxjs/Observable";
import { MenuItem } from "../menu-item/menu-item.model";

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;
  constructor(private restaurantService: RestaurantService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantService.menuOfRestaurant(this.activatedRoute.parent.snapshot.params['id']);
  }

  addMenuItem(item){
    console.log(item);
  }

}
