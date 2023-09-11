import Map from "./Map";
import { useEffect, useState } from "react";

export default function Flag({searchValue}) {
    const [country, setCountry ] = useState([])
    const fetchCountry = async () => {
        const res = await fetch("https://restcountries.com/v3.1/all")
        const data = await res.json();
        setCountry(data);
      };
      useEffect(() => {
        fetchCountry();
      }, []);
      const filteredArray = country.filter((item) => item.name.common.includes({searchValue}))
    return (
        <>
              {filteredArray.map((info, index) => <Map key={index} info={info} />)}
        </>
    )
}