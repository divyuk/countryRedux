import axios from "axios";
import {
  COUNTRIES_RECIEVED,
  CountriesActionType,
  SET_COUNTRY,
} from "./actionTypes";
import { Dispatch } from "react";

export const countriesRecieved = () => {
  return async (dispatch: Dispatch<CountriesActionType>) => {
    const url = `/api/countries.json`;
    const response = await axios.get(url);
    const data = response.data;

    dispatch({
      type: COUNTRIES_RECIEVED,
      payload: data,
    });
  };
};

export const setCountry = (country: string): CountriesActionType => ({
  type: SET_COUNTRY,
  payload: country,
});
