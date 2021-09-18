
class API{
    apiAddress = process.env.apiUrl;
    constructor(){
        this.post = this.post.bind(this);
        this.get = this.get.bind(this);
        this.patch = this.patch.bind(this);
        this.delete = this.delete.bind(this);
        this.put = this.put.bind(this);
    }
    post(path, body){
        const query = `${this.apiAddress}${path}`;
        return fetch(query, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                ...this.authHeaders()
            },
            body: body
        });
    }
    get(path, params){
        let query = `${this.apiAddress}${path}`;
        if(Object.keys(params).length){
            query+=`?${this.objectToUrl(params)}`
        }
        return fetch(query, {
            method:'GET',
            headers: {
                ...this.authHeaders()
            }
        });
    }
    patch(path, body){
        let query = `${this.apiAddress}${path}`;
        return fetch(query, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                ...this.authHeaders()
            },
            body
        });
    }
    put(path, body){
        let query = `${this.apiAddress}${path}`;
        return fetch(query, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                ...this.authHeaders()
            },
            body
        });
    }
    delete(path){
        const query = `${this.apiAddress}${path}`;
        return fetch(query, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                ...this.authHeaders()
            }
        });
    }
    async uploadMedia(fileObj){
        const query = `${this.apiAddress}/files`;
        const formData = new FormData();
        formData.append('file', fileObj);
        const res = await fetch(query, {
            method: 'POST',
            headers: {
                ...this.authHeaders()
            },
            body: formData
        });
        if(!res.ok) throw "Произошла ошибка при загрузке файла";
        const { file } = await res.json();
        return file;

    }
    authHeaders(){
        try{
            return ({
                'Authorization': localStorage.accessToken
            });
        }
        catch{
            return {}
        }
    }
    objectToUrl(params){
        var esc = encodeURIComponent;
        return Object.keys(params)
            .map(k => esc(k) + '=' + esc(params[k]))
            .join('&');
    }
}

export default new API();