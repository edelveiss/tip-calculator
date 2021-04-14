import { EDIT_PERSON_DATA } from "../actions/index";

const initialState = {
  editedPersonData: {},
};
const editPersonDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PERSON_DATA:
      return {
        editedPersonData: action.payload,
      };
    default:
      return state;
  }
};

export default editPersonDataReducer;
