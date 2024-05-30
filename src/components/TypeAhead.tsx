import { ChangeEvent, useState } from "react";

export interface Itypeahead {
  countries: string[];
  handleChange: (choice: string) => void;
}

export default function TypeAhead({ countries, handleChange }: Itypeahead) {
  const [term, setTerm] = useState<string>("");
  const [countryList, setCountryList] = useState<string[]>([]);

  function handler(event: ChangeEvent<HTMLInputElement>) {
    const name = event.target.value;
    setTerm(name);
    const filteredData = name
      ? countries.filter((country) =>
          country.toLowerCase().includes(name.toLowerCase())
        )
      : [];
    setCountryList(filteredData);
  }

  function handleClick(selected: string) {
    setTerm(selected);
    setCountryList([]);
    handleChange(selected);
  }

  return (
    <>
      <section>Type Country name</section>
      <input type="text" value={term} onChange={handler} />
      <section>
        {term && <p>Country List</p>}
        {countryList.map((country, index) => {
          return (
            <li
              key={index}
              onClick={() => handleClick(country)}
              style={{ cursor: "pointer" }}
            >
              {country}
            </li>
          );
        })}
      </section>
    </>
  );
}
