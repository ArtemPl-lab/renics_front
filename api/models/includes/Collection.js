import Relation from "./Relation";

class Collection extends Array{
    constructor(model, data){
        super();
        if(Array.isArray(data)) {
            this.push(...data);
        } else {
            this.push(data);
        }
        // add relations for each item
        if(model.relations){
            this.forEach(item => {
                if(!item) return;
                const props = Object.keys(model.relations).reduce((prev, name) => {
                    return {
                        ...prev,
                        [name]: {
                            get: () => new Relation(model, name, item)
                        }
                    };
                }, {});
                Object.defineProperties(item, props);
            });
        }
    }
    get first(){
        return this[0];
    }
}

export default Collection;