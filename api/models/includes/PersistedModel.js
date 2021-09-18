import api from "../../";
import Collection from "./Collection";
class PersistedModel{
    constructor(schema = {}){
        Object.keys(schema).forEach(key => this[key] = schema[key]);
    }
    async execute(request, querySuffix, ...args){
        const query = `/${this.plural}${querySuffix}`;
        const res = await request(query, ...args);
        if(res.ok) {
            const text = await res.text();
            return text.length ? JSON.parse(text) : {};
        }
        else return null;
    }
    async create(data){
        const params = JSON.stringify(data);
        const json = await this.execute( api.post, '', params );
        return new Collection(this, json);
    }
    async delete(id){
        return this.execute(api.delete, `/${id}`);
    }
    async find(filter = {}){
        const params = {
            filter: JSON.stringify(filter)
        }
        const json = await this.execute( api.get, '', params );
        return new Collection(this, json);
    }
    async findOne(filter = {}){
        const params = {
            filter: JSON.stringify(filter)
        }
        const json = await this.execute( api.get, '/findOne', params );
        return (new Collection(this, json)).first;
    }
    async findById(id, filter = {}){
        const params = {
            filter: JSON.stringify(filter)
        }
        const json = await this.execute(api.get, `/${id}`, params);
        return (new Collection(this, json)).first;
    }
    async patchAttributes(id, attributes){
        const json = await this.execute(api.patch, `/${id}`, JSON.stringify(attributes));
        console.log(json);
        // return
    }

}
export default PersistedModel;