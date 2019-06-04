const db = require('./conn.js');

class Topics {
    constructor(id, topic_name, ranking_rating){
        this.id = id;
        this.topic_name = topic_name;
        this.ranking_rating = ranking_rating;
    }

    static async getAll() {
        try {
            const response = await db.any(`select * from topics`);
            return response;
        } catch(err) {
            return err.message
        }
    }

    static async add(topic_name, ranking_rating) {
        console.log("async add", ranking_rating);
        const query = `UPDATE topics SET topic_understanding = '${ranking_rating}' WHERE topic_name = '${topic_name}'`;
        
        try {
            let response = await db.result(query);
            return response;
            } catch(err) {
                console.log('Error', err.message);
                return err;
        }
    }
}
module.exports = Topics;