const baseURL = "https://powerful-dawn-74322.herokuapp.com/";

class RestService {
  constructor() {}

  async get(path) {
    return await fetch(`${baseURL}${path}`);
  }
}

const Rest = new RestService();

export default Rest;
