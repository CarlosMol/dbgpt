import { getRequest, postRequest, putRequest, deleteRequest } from "./axios";

const API_URL = process.env.VUE_APP_API_URL;

export default function createService(serviceName) {
  return {
    async list() {
      const url = `${API_URL}${serviceName}/list`;
      return await getRequest(url);
    },

    async create(data) {
      const url = `${API_URL}${serviceName}/`;
      return await postRequest(url, data);
    },

    async update(data) {
      const url = `${API_URL}${serviceName}/${data.ID}`;
      return await putRequest(url, data);
    },

    async delete(data) {
      const url = `${API_URL}${serviceName}/${data.ID}`;
      return await deleteRequest(url, data);
    },
  };
}
