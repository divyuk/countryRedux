export const COUNTRIES_RECIEVED = "COUNTRIES_RECIEVED";
export const SET_COUNTRY = "SET_COUNTRY";

interface CountriesRecieved {
  type: typeof COUNTRIES_RECIEVED;
  payload: string[];
}

interface SetCountry {
  type: typeof SET_COUNTRY;
  payload: string;
}

export type CountriesActionType = CountriesRecieved | SetCountry;
