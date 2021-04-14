import { SET_PEOPLE_DATA } from "../actions/index";

const initialState = {
  peopleData: [],
};

const peopleDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PEOPLE_DATA:
      return { peopleData: action.payload };
    default:
      return state;
  }
};

export default peopleDataReducer;
