import HttpService from "./http-services";
class UserService extends HttpService {
  constructor(endpoint) {
    super(endpoint);
  }
  getById(id) {
    console.log("own method ", id);
  }
}

const create = (endpoint) => new UserService(endpoint);

export default create;
