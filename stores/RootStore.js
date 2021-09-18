import UserStore from "./AccountStore";
import CartStore from "./CartStore";

class RootStore {
    constructor(ctx) {
        this.ctx = ctx;
        this.account = new UserStore(this);
        this.cart = new CartStore(this);
        this.load = this.init();
    }
    updateContext(context){
        this.ctx = context;
    }
    async init(){
        try{
            if(typeof window === 'undefined') return;
            await this.account.init();
            await this.cart.init();
            return true;
        }
        catch{
            return false;
        }
    }
}

export default RootStore;
