import axios from "axios";

const GET_ELECTRONICS = "GET_ELECTRONICS";
const ADD_ELECTRONIC = "ADD_ELECTRONIC";

export function getElectronics() {
  return {
    type: GET_ELECTRONICS,
    payload: axios.get("/api/electronics")
  };
}

export function addElectronic(obj) {
  return {
    type: ADD_ELECTRONIC,
    payload: axios.post("/api/electronics", obj)
  };
}

const initialState = {
  electronics: [],
  isLoading: false,
  error: ""
};

export default function electronicsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ELECTRONICS_PENDING":
      return { ...state, isLoading: true };
    case "GET_ELECTRONICS_FULFILLED":
      return { ...state, isLoading: false, electronics: action.payload.data };
    case "GET_ELECTRONICS_REJECTED":
      return { ...state, isLoading: true, error: action.payload };

    case "ADD_ELECTRONIC_PENDING":
      return { ...state, isLoading: true };
    case "ADD_ELECTRONIC_FULFILLED":
      return {
        ...state,
        isLoading: false,
        electronics: [...state.electronics, action.payload.data]
      };
    case "ADD_ELECTRONIC_REJECTED":
      return { ...state, isLoading: true, error: action.payload };
    default:
      return state;
  }
}
