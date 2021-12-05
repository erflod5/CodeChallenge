import { echoConstants } from "../constants";
import { echoService } from "../services";

function getText(text) {
  return async (dispatch) => {
    dispatch({ type: echoConstants.GET_TEXT_REQUEST });
    try {
      const response = await echoService.getText(text);
      dispatch({
        type: echoConstants.GET_TEXT_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({ type: echoConstants.GET_TEXT_ERROR, payload: error });
    }
  };
}

export const echoActions = {
  getText,
};
