import { useState, useEffect } from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

export default function Homepage({ searchValue }) {
  const [countries, setCountries] = useState([]);
  const { Meta } = Card;

  const fetchCountry = async () => {
    try {
      if (searchValue === '') {
        const res = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await res.json();
        setCountries(data);
      } else {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${searchValue}`
        );
        const data = await res.json();
        setCountries(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, [searchValue]);

  const sortedCountries = countries.sort((a, b) => {
    const nameA = a.name.common.toUpperCase();
    const nameB = b.name.common.toUpperCase();
    return nameA.localeCompare(nameB);
  });

  return (
    <main>
      {sortedCountries.length > 0 ? (
        <>
          {sortedCountries.map((country, index) => (
            <Link className="link" key={index} to={`/${country.name.common}`}>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={
                  <img alt="example" src={country.flags.svg} height="180px" />
                }
              >
                <Meta
                  title={country.name.common}
                  description={`Continent: ${country.continents} `}
                />
              </Card>
            </Link>
          ))}
        </>
      ) : (
        <h1>No results found</h1>
      )}
    </main>
  );
}
