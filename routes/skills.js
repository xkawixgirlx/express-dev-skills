const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');


/* GET skills listing. */
router.get('/', skillsCtrl.index);
// GET /skills/new <-- define BEFORE show Route
router.get('/new', skillsCtrl.new);
//GET /skills/:id (show functionality/action => display detail of a single skill)
router.get('/:id', skillsCtrl.show);
//POST /skills
router.post('/', skillsCtrl.create);
// DELETE /skills/:id <-- don't add /skills it will append it! 
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
