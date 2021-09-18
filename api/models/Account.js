import PersistedModel from "./includes/PersistedModel";
import * as jsonShema from './Account.json';
import api from "../";

class AccountModel extends PersistedModel{
    constructor(){
        super(jsonShema);
    }
    login(creds){
        return this.execute(api.post, '/login', JSON.stringify(creds));
    }
    logout(){
        return this.execute(api.post, '/logout', null);
    }
    current(){
        return this.findById('self');
    }

}

export const Account = new AccountModel();