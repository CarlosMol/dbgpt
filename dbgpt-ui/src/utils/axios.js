import axios from "axios";

axios.interceptors.response.use(
  async function (response) {
    return response;
  },
  async function (error) {
    // if (error.response.data.message) {
    //   error.message = error.response.data.message;
    // }
    return Promise.reject(error);
  }
);

export async function getRequest(url, params, headers) {
  try {
    return await axios.get(url, { headers: headers, params: params });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function postRequest(url, data, headers) {
  try {
    console.log(url);
    console.log(data);
    return await axios.post(url, data, { headers: headers });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function putRequest(url, data, headers) {
  try {
    return await axios.put(url, data, { headers: headers });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteRequest(url, headers) {
  try {
    return await axios.delete(url, { headers: headers });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
