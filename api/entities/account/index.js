import { AccountLocalApi } from "./localApi";
import { AccountServerApi } from "./serverApi";

export class AccountApi{
    static async login(creds){
        const accessToken = await AccountServerApi.login(creds);
        AccountLocalApi.login(accessToken);
    }
    static async logout(){
        await AccountServerApi.logout();
        AccountLocalApi.logout();
    }
    static async current(){
        return AccountServerApi.current();
    }
}