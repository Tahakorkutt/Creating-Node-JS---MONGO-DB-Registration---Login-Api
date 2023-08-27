const express = require('express');

const router = express.Router(); //expres üzerinden router

router.post('/register', register)
router.post('/login', login)