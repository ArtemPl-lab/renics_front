import api from "../../";

class Relation{
    types = {
        hasMany: {
            methods: {
                find: (filter = {}) => this.model.execute(api.get, `/${this.item.id}/${this.name}`, {filter: JSON.stringify(filter)}),
                findById: (id) => this.model.execute(api.get, `/${this.item.id}/${this.name}/${id}`),
                create: (data = {}) => this.model.execute(api.post, `/${this.item.id}/${this.name}`,JSON.stringify(data) ) 
            }
        },
        embedsMany: {
            methods: {
                find: (filter = {}) => this.model.execute(api.get, `/${this.item.id}/${this.name}`, {filter: JSON.stringify(filter)}),
                findById: (id) => this.model.execute(api.get, `/${this.item.id}/${this.name}/${id}`),
                create: (data = {}) => this.model.execute(api.post, `/${this.item.id}/${this.name}`,JSON.stringify(data)),
                delete: (id) => this.model.execute(api.delete, `/${this.item.id}/${this.name}/${id}`),
                update: (id, data) => this.model.execute(api.put, `/${this.item.id}/${this.name}/${id}`, JSON.stringify(data))
            }
        }
    }
    constructor(model, name, item){
        this.model = model;
        this.name = name;
        this.item = item; 
        const methods = this.types[model.relations[name].type].methods;
        Object.keys(methods).forEach(method => {
            this[method] = methods[method];
        });
    }
}
export default Relation;