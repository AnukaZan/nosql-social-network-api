const router = require("express").Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controllers");

// GET and POST /api/Users
router.route("/").get(getAllUser).post(createUser);

// GET, UPDATE, and DELETE /api/Users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// POST and DELETE Friends /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;