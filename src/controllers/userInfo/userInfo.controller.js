const {
  default: userInfoService,
} = require("../../services/userInfo/userInfo.service");

async function userInfoController(request, response) {
  const user = await userInfoService(request.user.id);

  return response.json(user);
}

export default userInfoController;
