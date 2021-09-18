import PersistedModel from "./includes/PersistedModel";
import * as jsonShema from './Product.json';


class ProductModel extends PersistedModel{
    constructor(){
        super(jsonShema);
    }
}

export const Product = new ProductModel();