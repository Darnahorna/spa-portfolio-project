const baseUrl = "https://daria-nahorna-portfolio.fly.dev";

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

export const getAuthResponse = async (resource, method) => {
  const response = await fetch(baseUrl + resource, {
    method, // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify(body), // body data type must match "Content-Type" header
  }).catch((error) => {
    // Handle any errors that occurred during the fetch
    console.error("Error fetching the resource:", error);
  });

  return response;
};
