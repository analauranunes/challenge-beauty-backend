const {
  default: createUserService,
} = require("../../services/users/createUser.service");

async function createUserController(request, response) {
  const newUser = await createUserService(request);

  if (newUser.error) {
    return response.status(400).json({
      message: newUser.error,
    });
  }

  return response.status(201).json(
    newUser,
  );
}

export default createUserController;
