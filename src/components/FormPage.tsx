import { useEffect } from "react";
import TypeAhead from "./TypeAhead";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store/reducers/rootReducer";
import {
  countriesRecieved,
  setCountry,
} from "../store/actions/countriesAction";

export default function FormPage() {
  const { countries, country } = useSelector(
    (state: AppState) => state.countryStore
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(countriesRecieved());
  }, []);

  const handleChange = (choice: string) => {
    dispatch(setCountry(choice));
  };

  return (
    <>
      <TypeAhead countries={countries} handleChange={handleChange} />

      <section>
        <button type="submit">Submit</button>
      </section>

      <section>
        <p>You Choose : {country}</p>
      </section>
    </>
  );
}
