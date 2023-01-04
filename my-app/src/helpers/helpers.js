import axios from "axios";

export var global = { admin: { item: {} } };

export function networkCall(networkData, successCallback, errorCallback) {
  const handleSuccess = (responce) => {
    successCallback(responce.data);
  };

  const handleError = (error) => {
    errorCallback(error);
  };

  switch (networkData.type) {
    case "get": {
      axios.get(networkData.url).then(handleSuccess).catch(handleError);
      break;
    }
  }
}
