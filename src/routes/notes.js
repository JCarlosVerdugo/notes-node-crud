const router = require('express').Router();

router.get('/add', (req, res) => {
    res.render('notes/new-notes')
})

module.exports = router; 