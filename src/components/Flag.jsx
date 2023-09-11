import Map from "./Map";
import { useEffect, useState } from "react";

export default function Flag() {
    const [country, setCountry ] = useState([])
    const fetchCountry = async () => {
        const res = await fetch("https://restcountries.com/v3.1/all")
        const data = await res.json();
        setCountry(data);
      };
      useEffect(() => {
        fetchCountry();
      }, []);
      console.log(country);
    return (
        <>
              {country.map((info, index) => <Map key={index} info={info} />)}
        </>
    )
}