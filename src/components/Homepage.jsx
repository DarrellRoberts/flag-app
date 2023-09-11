import { Link } from "react-router-dom";

export default function Homepage({ country }) {
  console.log(country);

  return (
    <main>
      <div className="container-homepage">
        {country &&
          country.map((cnt) => (
            <div key={cnt.flag.png}>
              <Link to="/:country">
                <img src={cnt.flags.png} alt={cnt.flags} />
              </Link>
              <div>{cnt.name.common}</div>
            </div>
          ))}
      </div>
    </main>
  );
}
