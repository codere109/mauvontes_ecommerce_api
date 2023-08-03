const router = require('express').Router();
// import routes
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');
const catRoutes = require('./category-routes');
// define routes
router.use('/categories', catRoutes);
router.use('/products', productRoutes);
router.use('/tag', tagRoutes);


module.exports = router;
