const express = require('express');

const router = express.Router(); //expres üzerinden router

// post , get , put , delete

router.post('/register', register)
router.post('/login', login)

module.exports = router;