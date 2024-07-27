import apiClient from "./api-client";

class HttpService {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAll() {
    const controller = new AbortController();
    const request = apiClient.get(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
  //   create(entity){
  //     return apiClient.post(this.endpoint, entity);
  //   }
}
export default HttpService;
