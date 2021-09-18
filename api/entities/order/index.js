import { OrderLocalApi } from './localApi';
import { OrderServerApi } from './serverApi';
export class OrderApi{
    static create(){
        
    }
    static async delete(){

    }
    static async createItem(order, productId){
        const item = await OrderServerApi.createItem(order, productId);
        if(item) {
            OrderLocalApi.createItem(order, item);
        } else {
            throw item;
        }
    }
    static async deleteItem(order, productId){
        const item = OrderLocalApi.findItemByProductId(order, productId);
        const result = await OrderServerApi.deleteItem(order, item.id);
        if(result){
            OrderLocalApi.deleteItem(order, item.id);
        } else {
            throw result;
        }
    }
    static async updateItem(order, item){
        const result = await OrderServerApi.updateItem(order, item);
        if(result){
            OrderLocalApi.updateItem(order, result);
        }
    }
    static async find(order, filter){
        const result = OrderLocalApi.find(order, filter);
        return result || await OrderServerApi.find(filter);
    }
}

