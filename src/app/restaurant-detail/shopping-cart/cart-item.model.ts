import { MenuItem } from "../menu-item/menu-item.model";

export class CartItem {
    constructor(private menuItem: MenuItem, private quantity, number=1){

    }
}