const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');


/* GET skills listing. */
router.get('/', skillsCtrl.index);
//GET /skill/:id (show functionality/action => display detail of a single skill)
router.get('/:id', skillsCtrl.show);

module.exports = router;
