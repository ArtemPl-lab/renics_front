
export class AccountLocalApi{
    static login(accessToken){
        localStorage.accessToken = accessToken;
    }
    static logout(){
        localStorage.accessToken = "";
    }
}