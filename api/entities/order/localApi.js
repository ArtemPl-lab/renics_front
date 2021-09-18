export class OrderLocalApi{
    static create(){

    }
    static delete(){

    }
    static createItem(order, data){
        order.items.push(data);
    }
    static deleteItem(order, itemId){
        Object.assign(order, {
            ...order,
            items: order.items.filter(el => el.id !== itemId)
        });
    }
    static updateItem(order, item){
        Object.assign(order, {
            ...order,
            items: order.items.map(el => el.id === item.id ? item : el)
        });
    }
    static find(order, filter){
        if(!order) return;
        console.log(order);
        return order.items.find(item => Object.keys(filter).reduce((res, curr) => res && item[curr] === filter[curr], true));
    }
    static findItemByProductId(order, productId){
        return this.find(order, {
            productId
        })
    }
}