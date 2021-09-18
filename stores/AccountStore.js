import { makeAutoObservable } from "mobx";
import { AccountApi } from '../api/entities/account';

class AccountStore{
    current
    root
    constructor(root){
        makeAutoObservable(this, {
            root: false
        });
        this.root = root;
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.logout = this.logout.bind(this);
        this.init = this.init.bind(this);
    }
    async login(creds){
        await AccountApi.login(creds);
        this.root.load = this.root.init();
    }
    register(user){

    }
    async logout(){
        await AccountApi.logout();
        this.root.load = this.root.init();
    }
    async init(){
        this.current = null;
        if(localStorage.accessToken){
            const account = await AccountApi.current();
            if(account) this.current = account;
        }
    }
}

export default AccountStore;