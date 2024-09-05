const router = require('express').Router();

router.get('/add', (req, res) => {
    res.render('notes/new-notes')
});

router.post('/new-note', (req, res) => {
    console.log(req.body);
    const { title, description } = req.body;
    const errors = [];
    if (!title) {
        errors.push({text: 'Please write a title'})
    }
    if (!description) {
        errors.push({text: 'Please write a description'})
    }
    if (errors.length > 0) {
        res.render('notes/new-notes', { 
            errors,
            title,
            description
        });
    } else {
        res.send('ok');
    }
});

module.exports = router; 