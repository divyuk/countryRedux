import { Countries } from "../../models/Countries";
import {
  COUNTRIES_RECIEVED,
  CountriesActionType,
  SET_COUNTRY,
} from "../actions/actionTypes";

const initialState: Countries = {
  countries: [],
  country: "",
};

export default function reducerCountry(
  state = initialState,
  action: CountriesActionType
) {
  switch (action.type) {
    case COUNTRIES_RECIEVED:
      return { ...state, countries: action.payload };
    case SET_COUNTRY:
      return { ...state, country: action.payload };
    default:
      return state;
  }
}
