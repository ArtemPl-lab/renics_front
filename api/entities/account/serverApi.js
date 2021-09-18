import { Account } from '../../models';


export class AccountServerApi{
    static async login(creds){
        const { id } = await Account.login(creds);
        return id;
    }
    static async logout(){
        await Account.logout();
    }
    static async current(){
        return await Account.current();
    }
}