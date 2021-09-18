import PersistedModel from "./includes/PersistedModel";
import * as jsonShema from './Order.json';

class OrderModel extends PersistedModel{
    constructor(){
        super(jsonShema);
    }
}

export const Order = new OrderModel();