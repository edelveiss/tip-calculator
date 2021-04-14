export const SET_PEOPLE_DATA = "SET_PEOPLE_DATA";
export const EDIT_PERSON_DATA = "EDIT_PERSON_DATA";
export const SET_AMOUNT = "SET_AMOUNT";
export const UPDATE_TOTAL_AMOUNT = "UPDATE_TOTAL_AMOUNT";
export const UPDATE_TOTAL_TIP = "UPDATE_TOTAL_TIP";

export const setPeopleData = (peopleData) => (dispatch) => {
  dispatch({ type: SET_PEOPLE_DATA, payload: peopleData });
};

export const editPersonData = (editedProduct) => (dispatch) => {
  dispatch({ type: EDIT_PERSON_DATA, payload: editedProduct });
};

export const setAmount = (data) => (dispatch) => {
  dispatch({ type: SET_AMOUNT, payload: data });
};
export const updateTotalAmount = (data) => (dispatch) => {
  dispatch({ type: UPDATE_TOTAL_AMOUNT, payload: data });
};
export const updateTotalTip = (data) => (dispatch) => {
  dispatch({ type: UPDATE_TOTAL_TIP, payload: data });
};
