import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Map from "./Map"

export default function Flag() {
  const [info, setInfo] = useState({});
  const { country } = useParams();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${country}`
        );
        const data = await res.json();

        setInfo(data[0]);
      } catch (error) {
        console.error('Error fetching country data', error);
      }
    };

    if (country) {
      fetchCountry();
    }
  }, [country]);

  console.log(info);
  return (
    <>
            <div className="flagContainer">
      {info.name ? (
        <div className="description">
          <h2>{info.name.common}</h2>
          <p>Capital: {info.capital}</p>
          <p>{info.fifa}</p>
        <Map className="countryMap" info={info} />
        </div>
      ) : null}
      </div>
    </>
  );
}
