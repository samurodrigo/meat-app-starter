import { CartItem } from './cart-item.model';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';

export class ShoppingCartService{
    itens: CartItem[] = [];

    clear(){
        this.itens = [];
    }

    total(): number {
        return this.itens
                    .map(x => x.value())
                    .reduce((prev, value) => prev + value, 0);
    }

    addItem(menuItem: MenuItem) {
        let foundItem = this.itens.find(x => x.menuItem.id === menuItem.id);
        if (foundItem) {
            this.increaseQty(foundItem);
        } else {
            this.itens.push(new CartItem(menuItem));
        }
    }

    removeItem(item: CartItem) {
        this.itens.splice(this.itens.indexOf(item), 1);
    }
    increaseQty(item: CartItem){
        item.quantity = item.quantity + 1;
    }
    decreaseQty(item: CartItem){
        item.quantity = item.quantity - 1;
        if(item.quantity === 0){
            this.removeItem(item);
        }
    }   
}