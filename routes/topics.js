var express = require('express');
var router = express.Router();
const TopicsModels = require('../models/topics');

router.get('/', async (req,res,next) => {
    const allTopics = await TopicsModels.getAll();
    
    res.render('template', {
        locals: {
            title: 'Topics',
            topicsList: allTopics
        },
        partials: {
            partial: 'partial-topics',
        }
    });
});

router.post('/', (req, res) => {
    const { topic_name, ranking_rating} = req.body;

    TopicsModels.add(topic_name, ranking_rating)
    .then(async () => {
        const allTopics = await TopicsModels.getAll();
        
        res.status(200).render('template', {
            locals: {
                title: 'Topic Rankings Updated',
                topicsList: allTopics
            },
            partials: {
                partial: 'partial-topics',
            }
        });
    })
        .catch((err) => {
        res.sendStatus(500).send(err.message);
    });
});


module.exports = router;