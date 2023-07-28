import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

const baseUrl = "http://127.0.0.1:3000";

export const getResponse = (resource, method, body = null) => {
  return new Promise((resolve, reject) => {
    axios
      .request({
        method: method,
        url: baseUrl + resource,
        data: body,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.response.data.error);
        reject(error);
      });
  });
};
