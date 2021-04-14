import {
  SET_AMOUNT,
  UPDATE_TOTAL_AMOUNT,
  UPDATE_TOTAL_TIP,
} from "../actions/index";

const initialState = {
  price: "",
  tipPercent: "",
  numberOfPeople: 1,
  totalAmount: 0,
  totalTip: 0,
};

const amountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AMOUNT:
      return {
        ...state,
        price: Number(action.payload.price),
        tipPercent: action.payload.tipPercent,
        numberOfPeople: Number(action.payload.numberOfPeople),
      };
    case UPDATE_TOTAL_AMOUNT:
      return {
        ...state,
        totalAmount: Number(action.payload).toFixed(2),
      };
    case UPDATE_TOTAL_TIP:
      return {
        ...state,
        totalTip: Number(action.payload).toFixed(2),
      };
    default:
      return state;
  }
};

export default amountReducer;
