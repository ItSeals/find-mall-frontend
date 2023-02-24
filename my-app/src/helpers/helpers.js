import axios from "axios";

export var global = {
  api: `http://${
    process.env.REACT_APP_IPV4 !== undefined
      ? process.env.REACT_APP_IPV4
      : "localhost"
  }:3000/api/v1`,
  apiWithoutURLPattern: `http://${
    process.env.REACT_APP_IPV4 !== undefined
      ? process.env.REACT_APP_IPV4
      : "localhost"
  }:3000`,
  testServer:
    process.env.REACT_APP_TEST_SERVER !== undefined
      ? process.env.REACT_APP_TEST_SERVER
      : "false",
  searchName: null,
  filterData: {},
  admin: { mall: {}, category: {}, tag: {}, otherTag: {}, item: {} },
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
        .post(networkData.url, networkData.content, {headers: networkData.headers})
        .then(handleSuccess)
        .catch(handleError);
      break;
    }
    case "put": {
      await axios
        .put(networkData.url, networkData.content, {headers: networkData.headers})
        .then(handleSuccess)
        .catch(handleError);
      break;
    }
    case "patch": {
      await axios
        .patch(networkData.url, networkData.content, {headers: networkData.headers})
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
