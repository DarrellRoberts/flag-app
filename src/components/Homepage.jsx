import { useState, useEffect } from "react";
import { Card } from "antd";

export default function Homepage({ searchValue }) {
  let [countries, setCountries] = useState([]);
  const { Meta } = Card;
  const fetchCountry = async () => {
    if (searchValue === "") {
      const res = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await res.json();
      setCountries(data);
    } else {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${searchValue}`
      );
      const data = await res.json();
      setCountries(data);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, [searchValue]);

  const sortedCountries = countries.slice().sort((a, b) => {
    const nameA = a.name.common.toUpperCase();
    const nameB = b.name.common.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (
    <main>
      {sortedCountries.map((country, index) => {
        return (
          <Card
            key={index}
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={country.flags.svg} height="180px" />}
          >
            <Meta
              title={country.name.common}
              description={`Continent: ${country.continents} `}
            />
          </Card>
        );
      })}
    </main>
  );
}
