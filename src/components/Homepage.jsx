export default function Homepage({ country }) {
  console.log(country);
  return (
    <main>
      <div className="country_container">
        {country.map((singleCountry, index) => (
          <div key={index} className="country_info_container">
            <h1>{singleCountry.name.common}</h1>
            <img src={singleCountry.flags.png} alt={singleCountry.flags.alt} />
            <p>Region: {singleCountry.region}</p>
            <p>Capital: {singleCountry.capital}</p>
            <p>Population: {singleCountry.population}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
