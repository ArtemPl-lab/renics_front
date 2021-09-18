import PersistedModel from "./includes/PersistedModel";

const jsonShema = {
    "name": "Article",
    "plural": "articles",
    "base": "PersistedModel",
    "idInjection": true,
    "options": {
      "validateUpsert": true
    },
    "properties": {
      "title": {
        "type": "object",
        "required": true
      },
      "content": {
        "type": "object",
        "required": true
      },
      "thumbnail": {
        "type": "string",
        "required": true
      },
      "date": {
        "type": "date",
        "required": true
      },
      "views": {
        "type": "number",
        "required": true,
        "default": 0
      },
      "category": {
        "type": "string"
      }
    },
    "validations": [],
    "relations": {},
    "acls": [],
    "methods": {}
  }
  

class ArticleModel extends PersistedModel{
    constructor(){
        super(jsonShema);
    }
}

export const Article = new ArticleModel();