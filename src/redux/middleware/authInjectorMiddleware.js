import { RSAA } from "redux-api-middleware";
import { isTypeRequest } from "Utils/validationHelper";

export default store => next => action => {
  const callApi = action[RSAA];

  // Check if this action is a redux-api-middleware action.
  if (callApi) {
    const { types } = callApi;
    console.log(types, "types");

    //check if auth is required or not
    if (
      types &&
      types.length === 3 &&
      types[0] &&
      isTypeRequest(types[0])
    ) {
      // callApi.headers = {
      //   ...callApi.headers,
      //   "x-rapidapi-host": "",
      // 	 "x-rapidapi-key": "", 
      //   // "Content-Type": "application/json",
      //   // Accept: "application/json,*/*"
      // }
      // TODO Move constants to Dotenv file.
      callApi.endpoint = `${callApi.endpoint}&apikey=${''}`
      return next(action);
    }
  }
  return next(action);
};
