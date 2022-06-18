const {
  default: allUsersService,
} = require("../../services/users/allUsers.service");

async function allUsersController(request, response) {
  const users = await allUsersService();

  return response.json(users);
}

export default allUsersController;
