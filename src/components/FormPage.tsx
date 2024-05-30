import axios from "axios";
import { useEffect, useState } from "react";
import TypeAhead from "./TypeAhead";

export default function FormPage() {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getData() {
      const url = `/api/countries.json`;
      const response = await axios.get(url);
      const data = response.data;
      setCountries(data);
    }
    getData();
  }, []);

  const handleChange = (choice: string) => {
    setCountry(choice);
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
