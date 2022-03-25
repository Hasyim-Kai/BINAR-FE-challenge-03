const router = require('express').Router();
const page = require("../controllers/pagesController");
const Satpam = require('../middlewares/authMiddleware');

router.get('/', page.login)
router.post('/', (req, res) => {res.cookie('token', 'token123'); res.redirect('/dashboard');})

router.get('/dashboard', Satpam, page.home)
router.get('/car', Satpam, page.car)
router.get('/addcar', Satpam, page.addCar)

module.exports = router;