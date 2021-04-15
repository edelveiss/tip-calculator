import { combineReducers } from "redux";
import peopleDataReducer from "./peopleDataReducer";
import editPersonDataReducer from "./editPersonDataReducer";
import amountReducer from "./amountReducer";

const reducers = combineReducers({
  peopleData: peopleDataReducer,
  editedPersonData: editPersonDataReducer,
  amount: amountReducer,
});

export default reducers;
