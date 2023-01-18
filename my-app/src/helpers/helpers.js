import axios from "axios";

export var global = {
  api: `http://${window.location.hostname}:3000/api/v1`,
  admin: { mall: {}, category: {}, tag: {}, item: {} },
};

export async function networkCall(networkData, successCallback, errorCallback) {
  const handleSuccess = (responce) => {
    successCallback(responce.data);
  };

  const handleError = (error) => {
    errorCallback(error);
  };

  switch (networkData.type) {
    case "get": {
      await axios.get(networkData.url).then(handleSuccess).catch(handleError);
      break;
    }
    case "post": {
      await axios
        .post(networkData.url, networkData.content)
        .then(handleSuccess)
        .catch(handleError);
      break;
    }
    case "put": {
      await axios
        .put(networkData.url, networkData.content)
        .then(handleSuccess)
        .catch(handleError);
      break;
    }
    case "delete": {
      await axios
        .delete(networkData.url)
        .then(handleSuccess)
        .catch(handleError);
      break;
    }
  }
}
