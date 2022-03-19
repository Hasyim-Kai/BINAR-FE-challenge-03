const router = require('express').Router();
const page = require("../controllers/pagesController");

router.get('/', page.home)
router.get('/car', page.car)
router.get('/addcar', page.addCar)

router.get('/about', page.about)
router.get('/articles', page.articles)

module.exports = router;