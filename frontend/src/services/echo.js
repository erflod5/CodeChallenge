import { API } from "../constants";
import { handleResponse } from "../helpers";

async function getText(text) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(
    `${API.host}/iecho?text=${text}`,
    requestOptions
  );
  return handleResponse(response);
}

export const echoService = {
  getText,
};
