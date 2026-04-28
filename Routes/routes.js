const express=require('express')
const  jwtMiddle=require('../Middleware/jwtMiddleware')
const multerConfig=require('../Middleware/multerMiddleware')
const userController=require('../Controllers/userController')
const bookController=require('../Controllers/bookController')
const pdfmulterConfig=require('../Middleware/pdfMulterMiddleware')
const applicationController=require('../Controllers/applicationController')
const adminJwtmiddle=require('../Middleware/AdminjwtMiddleware')
const router=express.Router()
const jobController=require('../Controllers/jobController')

router.post('/signup',userController.signup)

router.post('/signin',userController.signin)

router.post('/google-login',userController.googleSignin)

router.put('/profile-update',jwtMiddle,multerConfig.single('profile'),userController.profileUpdate)

router.get('/get-profile',jwtMiddle,userController.getProfile)

//books

router.post('/add-book',jwtMiddle,multerConfig.array('uploadImg',3),bookController.addBook)

router.get('/all-book',jwtMiddle,bookController.allBooksList)

router.get('/latest-book',bookController.latestBooks)

router.get('/getbookbyid/:bid',jwtMiddle,bookController.getBookById)

router.get('/getuserbooks',jwtMiddle,bookController.getUserBooks)

router.delete('/delete-books/:bid/delete',bookController.deleteBookById)

router.get('/purchased-books',jwtMiddle,bookController.getBoughtBooks)

router.post('/apply-job',jwtMiddle,pdfmulterConfig.single('resume'),applicationController.addapplication)


router.get('/list-jobpost',jwtMiddle,jobController.listjobpost)

router.post('/purchase-book',jwtMiddle,bookController.purchaseBookStripe)

//Admin

router.get('/admin/get-books',adminJwtmiddle,bookController.getAdminAllBooks)

router.get('/admin/get-users',adminJwtmiddle,userController.getAdminUsers)

router.patch('/admin/approve-book/:bid',adminJwtmiddle,bookController.approveBook)


router.post('/admin/add-jobpost',adminJwtmiddle,jobController.addjobpost)

router.get('/admin/list-jobpost',adminJwtmiddle,jobController.listjobpost)

router.delete('/admin/delete-jobpost/:jid',adminJwtmiddle,jobController.deleteJobPost)


router.get('/admin/list-applyjob',adminJwtmiddle,applicationController.listapplication)

module.exports=router



