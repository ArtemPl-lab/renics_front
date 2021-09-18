import { Order } from "../../models";

export class OrderServerApi{
    static create(){
        return Order.create();
    }
    static delete(orderId){
        return Order.delete(orderId);
    }
    static createItem(order, productId){
        return order.products.create({
            productId,
            count: 1,
            disabled: false
        })
    }
    static deleteItem(order, itemId){
        return order.products.delete(itemId);
    }
    static updateItem(order, item){
        return order.products.update(item.id, item);
    }
    static find(filter){
        return Order.findOne({
            where: filter
        })
    }
}