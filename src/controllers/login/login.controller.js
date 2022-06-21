import loginService from "../../services/login/login.service";

async function loginController(request, response) {
  const userLogin = await loginService(request);

  if (userLogin.error) {
    return response.status(400).json({
      message: userLogin.error,
    });
  }

  return response.json(userLogin);
}

export default loginController;
