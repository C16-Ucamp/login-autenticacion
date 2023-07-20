const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const authRouter = require('./auth')
const authMiddleware = require('../middlewares/authorization')

const registerRouter = require('./register')
const adminRouter = require('./admin')

const productRouter = require('./products')

router.use('/products', productRouter)

router.use('/auth', authRouter);
router.use('/register',registerRouter  )
router.use(authMiddleware)
router.use('/users', userRouter);
router.use('/admin', adminRouter); 

module.exports = router;
