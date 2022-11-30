import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const reducer = combineReducers({
  form: formReducer // mounted under "form"
});

export default reducer;
