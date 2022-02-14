const router = require('express').Router();
const itemController = require("../controllers/item.controller");

// for type
router.route('/type').get(itemController.selectTypes).post(itemController.insertType)
router.get("/type", itemController.selectTypes);
router.post("/type", itemController.insertType);

// for category
router.post("/category", itemController.insertCategory);
router.get("/category", itemController.selectCategory);

// for user
router.post("/user", itemController.insertUser);
router.post("/userlogin", itemController.selectUser);//for login
router.get("/userall", itemController.selectAllUsers)// for change category of user
router.get("/user/:id", itemController.selectProfile);// for profile
router.put("/user/:id", itemController.updateUserCategory);// for change category


// for post
router.get("/homePosts", itemController.selectAllPosts);
router.get("/homePosts/:id_type", itemController.selectAllPostsByIdType);
router.get("/profilPosts/:id", itemController.selectAllPostsUser);// for profile
router.post("/posts", itemController.insertPost);

// for booking
router.post("/booking", itemController.insertBooking)
router.get("/booking/:id", itemController.selectBooking)



module.exports = router;
