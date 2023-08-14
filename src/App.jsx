import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import ResidentsInfo from "./components/ResidentsInfo";

function App() {
  const [rick, setRick] = useState({});
  const [inputId, setInputId] = useState("");
  const randomid = Math.floor(Math.random() * 126) + 1;

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomid}`)
      .then((res) => setRick(res.data));
  }, []);

  const search = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${inputId}`)
      .then((res) => setRick(res.data));
  };

  console.log(rick);
  return (
    <div className="App">
      <div className="header">
        <div className="container--input">
          <input
            type="text"
            placeholder="search episode for ''id''"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
          />
          <button className="search" onClick={search}>
            search
          </button>
        </div>
      </div>

      <div className="container--rick">
        <p>
          <b> name:</b> &nbsp; {rick.name}
        </p>

        <div className="container--population">
          <p>
            <b> Type:</b>&nbsp; {rick.type}
          </p>
          <p>
            <b> Dimension:</b>&nbsp; {rick.dimension}
          </p>
          <p>
            <b> population:</b> &nbsp;
            {rick.residents?.length}
          </p>
        </div>
      </div>

      <div className="container--father-card">
        {rick.residents?.map((resident) => (
          <ul>
            <ResidentsInfo url={resident} />
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
