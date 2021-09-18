import { makeAutoObservable, makeObservable, observable } from "mobx";
import { Order, Account, Product } from "../api/models";
import { CartApi } from '../api/entities/cart';
import { CartLocalApi } from "../api/entities/cart/localApi";
class CartStore{
    order = null;
    products = [];
    root
    constructor(root){
        makeAutoObservable(this, {
            root: false
        });
        makeObservable(root, {
            ctx: observable
        })
        this.root = root;
        this.init = this.init.bind(this);
    }
    get totalPrice(){
        return this.salePrice || 0;
    }
    get defaultPrice(){
        return this.products.reduce((result, curr) => {
            const item = this.findItemByProductId(curr.id);
            if(!item) return;
            const price = curr.defaultPrice[this.root.ctx.router.locale];
            return result + parseInt(price) * item.count;
        }, 0)
    }
    get salePrice(){
        return this.products.reduce((result, curr) => {
            const item = this.findItemByProductId(curr.id);
            if(!item) return;
            const defaultPrice = curr.defaultPrice[this.root.ctx.router.locale];
            const salePrice = curr.salePrice[this.root.ctx.router.locale];
            return result + parseInt(salePrice || defaultPrice) * item.count
        }, 0)
    }
    get discount(){
        return this.defaultPrice - this.salePrice;
    }
    get productsCount(){
        return this.products.length;
    }
    async addProduct(productId){
        await CartApi.createItem(this.order, productId);
        await this.reloadProducts();
    }
    async deleteProduct(productId){
        await CartApi.deleteItem(this.order, productId);
        await this.reloadProducts();
    }
    async updateQuantity(productId, quantity){
        const item = CartLocalApi.findItemByProductId(this.order, productId);
        await CartApi.updateItem(this.order, {
            ...item,
            count: quantity
        });
    }
    find(filter){
        return CartLocalApi.find(this.order, filter);
    }
    findItemByProductId(id){
        return CartLocalApi.findItemByProductId(this.order, id);
    }
    has(productId){
        if(!productId || !this.order) return;
        return this.order.items.some(el => el.productId === productId);
    }
    async init(){
        const account = this.root.account.current;
        this.products = [];
        this.order = null;
        if(account){
            let order = await Order.findById(account.currentOrder);
            if(!order) {
                ( 
                    [order] = await account.orders.find({
                        where: {
                            status: "forming"
                        }
                    })
                )
                if(!order) order = await account.orders.create();
                Account.patchAttributes(account.id, {
                    currentOrder: order.id
                });
            }
            this.order = order;
            this.reloadProducts();
        }
    }
    async reloadProducts(){
        if(!(await this.root.load) || !this.order) return; // return when store not loaded or user hasn't order
        this.products = this.products.filter(p => this.has(p.id)); //remove products that have been deleted from order items

        for (const item of this.order.items) {
            const hasInStore = this.products.some(prod => prod.id === item.productId);
            if(hasInStore) continue;
            const product = await Product.findById(item.productId);
            if(product) this.products.push({
                ...item,
                ...product
            });
        }
    }
}


export default CartStore;